// Tests de caracterización: comparan tu createReporter().build con report() de src/legacy.js.
// No los cambies: son la red que dice si tu refactor hace lo mismo que el original.
import { describe, expect, it } from 'vitest';
import { report } from '../src/legacy.js';
import { createReporter } from '../src/logic.js';
import { SEED } from '../src/data.js';

// Fichas con errores, para que el informe tenga su última sección.
const BROKEN = [
  { id: 'e1', name: '', type: 'taller', rating: 4, visitors: 10 },
  { id: 'e2', name: 'Sin datos' },
  { name: 'Sin id', type: 'taller', rating: 7, visitors: 1.5 },
  { id: 'e4', name: '  ', type: ' ', rating: Number.NaN, visitors: -1 },
  { id: 'e5', name: 'Infinita', type: 'taller', rating: 3, visitors: Infinity },
];

// Dos fichas que empatan en valoración y en visitantes con la primera, para probar los desempates.
const TIES = [
  { ...SEED[0], id: 't1', name: `${SEED[0].name} (bis)` },
  { ...SEED[0], id: 't2', name: `0 ${SEED[0].name}` },
];

const DATASETS = {
  'las fichas de SEED': SEED,
  'SEED con fichas con errores': [...SEED, ...BROKEN],
  'SEED con empates': [...SEED, ...TIES],
  'ninguna ficha': [],
};

const type = SEED[0].type;
const OPTIONS = [
  {},
  { sort: 'name' },
  { sort: 'name', desc: true },
  { sort: 'rating' },
  { sort: 'rating', desc: true },
  { sort: 'visitors' },
  { sort: 'visitors', desc: true },
  { desc: true },
  { sort: 'precio' },
  { type },
  { type, sort: 'rating', desc: true },
  { type: 'no existe' },
  { minRating: 4.5 },
  { minRating: 4.5, sort: 'name', desc: true },
  { minRating: 0, type, sort: 'visitors' },
];

// Llama al original con sus seis parámetros posicionales y devuelve el texto y el resumen.
const legacy = (items, { type, sort, desc, minRating }) => {
  let summary;
  const text = report(items, type, sort, desc, minRating, (data) => {
    summary = data;
  });
  return { text, summary };
};

const refactored = (items, options) => {
  const reporter = createReporter();
  let summary;
  reporter.on('report', (data) => {
    summary = data;
  });
  return { text: reporter.build(items, options), summary };
};

for (const [name, items] of Object.entries(DATASETS)) {
  describe(`con ${name}`, () => {
    it.each(OPTIONS.map((options) => ({ options, label: JSON.stringify(options) })))(
      'build($label) escribe el mismo informe y emite el mismo resumen',
      ({ options }) => {
        expect(refactored(items, options)).toEqual(legacy(items, options));
      },
    );
  });
}
