// Escribe el informe de SEED en la terminal.
//   pnpm start             con tu versión, la de src/logic.js
//   pnpm start --legacy    con la original, la de src/legacy.js
import { report } from './legacy.js';
import { createReporter } from './logic.js';
import { SEED } from './data.js';

if (process.argv.includes('--legacy')) {
  console.log(report(SEED, '', 'rating', true));
} else {
  const reporter = createReporter();
  reporter.on('report', (summary) => console.log('Resumen emitido:', summary));
  console.log(reporter.build(SEED, { sort: 'rating', desc: true }));
}
