// Interfaz del importador: recoge archivos del botón, del arrastre y del portapapeles, los pasa
// por las funciones de logic.js y pinta el resultado. No hace falta editarlo, pero léelo:
// aplica la teoría de la semana.
import { APP, FIELDS } from './data.js';
import { formatBytes, checkFile, readRecords, mergeRecords, exportFile } from './logic.js';

const zone = document.querySelector('#zone');
const input = document.querySelector('#files');
const reports = document.querySelector('#reports');
const table = document.querySelector('#records');
const total = document.querySelector('#total');
const buttons = document.querySelectorAll('[data-format]');
const clear = document.querySelector('#clear');

let records = [];

document.title = APP.title;
document.querySelector('h1').textContent = APP.title;
document.querySelector('#intro').textContent = APP.intro;
document.querySelector('#rules').textContent =
  `Se admiten ${APP.accept.join(' y ')} de hasta ${formatBytes(APP.maxBytes)}, con las columnas ${FIELDS.map((field) => field.name).join(', ')}.`;
input.accept = APP.accept.join(',');

// Una fila de la tabla con celdas th o td.
const tableRow = (cells, tag) => {
  const row = document.createElement('tr');
  row.append(...cells.map((text) => Object.assign(document.createElement(tag), { textContent: text ?? '' })));
  return row;
};

const render = () => {
  table.tHead.replaceChildren(tableRow(FIELDS.map((field) => field.label), 'th'));
  table.tBodies[0].replaceChildren(...records.map((record) => tableRow(FIELDS.map((field) => record[field.name]), 'td')));
  total.textContent = `${records.length} registros`;
  for (const button of [...buttons, clear]) button.disabled = records.length === 0;
};

// Un informe por archivo: el resumen y, debajo, la lista de errores con su fila.
const report = (title, errors, ok) => {
  const item = document.createElement('li');
  item.className = ok ? 'ok' : 'error';
  item.append(Object.assign(document.createElement('strong'), { textContent: title }));
  if (errors.length > 0) {
    const list = document.createElement('ul');
    list.append(...errors.map(({ row, message }) =>
      Object.assign(document.createElement('li'), { textContent: row > 0 ? `Fila ${row}: ${message}` : message })));
    item.append(list);
  }
  reports.prepend(item);
};

// El mismo camino para el botón, el arrastre y el pegado: validar, leer, unir y pintar.
const handleFiles = async (fileList) => {
  const files = [...fileList].toSorted((a, b) => a.name.localeCompare(b.name));
  for (const file of files) {
    const problem = checkFile(file, APP);
    if (problem) {
      report(problem, [], false);
      continue;
    }
    const { records: incoming, errors } = await readRecords(file, FIELDS);
    const merged = mergeRecords(records, incoming, APP.key);
    records = merged.records;
    report(`${file.name} (${formatBytes(file.size)}): ${merged.added} nuevos, ${merged.replaced} actualizados, ${errors.length} con errores`,
      errors, errors.length === 0);
  }
  render();
};

input.addEventListener('change', () => {
  handleFiles(input.files);
  input.value = '';
});

// Arrastrar y soltar: la zona acepta solo arrastres con archivos y se resalta con un contador,
// porque entrar en un elemento hijo dispara dragleave en la zona.
const hasFiles = (event) => event.dataTransfer?.types.includes('Files') ?? false;
let depth = 0;
zone.addEventListener('dragenter', (event) => {
  if (!hasFiles(event)) return;
  depth += 1;
  zone.classList.add('is-over');
});
zone.addEventListener('dragleave', () => {
  depth = Math.max(0, depth - 1);
  if (depth === 0) zone.classList.remove('is-over');
});
zone.addEventListener('dragover', (event) => {
  if (!hasFiles(event)) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
});
zone.addEventListener('drop', (event) => {
  if (!hasFiles(event)) return;
  event.preventDefault();
  depth = 0;
  zone.classList.remove('is-over');
  handleFiles(event.dataTransfer.files);
});
// Fuera de la zona, el navegador abriría el archivo y la página se perdería.
for (const type of ['dragover', 'drop']) {
  window.addEventListener(type, (event) => {
    if (hasFiles(event) && !zone.contains(event.target)) event.preventDefault();
  });
}
document.addEventListener('paste', (event) => {
  if (event.clipboardData.files.length === 0) return;
  event.preventDefault();
  handleFiles(event.clipboardData.files);
});

// Exportar: un File de exportFile, una URL de objeto temporal y un enlace con download.
for (const button of buttons) {
  button.addEventListener('click', () => {
    const file = exportFile(records, FIELDS, button.dataset.format, APP.exportName);
    const url = URL.createObjectURL(file);
    const link = Object.assign(document.createElement('a'), { href: url, download: file.name });
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  });
}

clear.addEventListener('click', () => {
  records = [];
  reports.replaceChildren();
  render();
});

render();
