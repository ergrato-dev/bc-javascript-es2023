/**
 * 📘 Lab 03: Estados en la página
 * Este es un lab guiado. Abre index.html en el navegador (doble clic) con la consola de las
 * DevTools abierta, descomenta el código de cada paso, guarda y recarga con F5.
 *
 * Cada paso añade a steps una función; al final del archivo se ejecutan en orden, esperando a
 * cada una. No hay servidor: `fakeApi` responde con setTimeout.
 */

const steps = [];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const $ = (selector) => document.querySelector(selector);

// Una API falsa que responde con `items` a los `ms` milisegundos.
const fakeApi = (items, ms = 200) => wait(ms).then(() => items);

const ITEMS = [
  { id: 1, name: 'Sirio', type: 'Estrella' },
  { id: 2, name: 'Vega', type: 'Estrella' },
  { id: 3, name: 'Nebulosa de Orión', type: 'Nebulosa' },
];

// Convierte un texto en HTML seguro (semana 17).
const escapeHtml = (value) =>
  String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

// ============================================
// PASO 1: Un estado, un texto
// ============================================

// Descomenta las siguientes líneas:
// const TEXTS = {
//   idle: '',
//   loading: 'Cargando…',
//   ready: '3 fichas',
//   empty: 'Ninguna ficha coincide con «zzz»',
//   error: 'No se pudo conectar con el servidor',
// };
// const renderStatus = (status) => {
//   $('#status').textContent = TEXTS[status];
//   $('#list').setAttribute('aria-busy', String(status === 'loading'));
// };
// steps.push(async () => {
//   console.log('--- Paso 1: Cinco estados ---');
//   for (const status of Object.keys(TEXTS)) {
//     renderStatus(status);
//     console.log(`  ${status.padEnd(7)} → «${$('#status').textContent}» · aria-busy=${$('#list').getAttribute('aria-busy')}`);
//     await wait(300);
//   }
// });

// ============================================
// PASO 2: No vaciar la lista mientras carga
// ============================================

// Descomenta las siguientes líneas:
// const paintCards = (items) => {
//   $('#list').innerHTML = items.map((item) => `<div class="card" data-id="${item.id}">${escapeHtml(item.name)} <button type="button">Borrar</button></div>`).join('');
// };
// steps.push(async () => {
//   console.log('--- Paso 2: Vaciar o conservar ---');
//   paintCards(ITEMS);
//   // A: vaciar, pedir y pintar
//   $('#list').innerHTML = '';
//   renderStatus('loading');
//   const pendingA = fakeApi(ITEMS);
//   await wait(100);
//   console.log('  A, a mitad de la carga:', $('#list').children.length, 'fichas en pantalla');
//   paintCards(await pendingA);
//   renderStatus('ready');
//   // B: conservar lo que hay, marcarlo como «ocupado» y pintar encima
//   renderStatus('loading');
//   const pendingB = fakeApi(ITEMS);
//   await wait(100);
//   console.log('  B, a mitad de la carga:', $('#list').children.length, 'fichas en pantalla, aria-busy =', $('#list').getAttribute('aria-busy'));
//   paintCards(await pendingB);
//   renderStatus('ready');
//   console.log('  B, al terminar:', $('#list').children.length, 'fichas, aria-busy =', $('#list').getAttribute('aria-busy'));
// });

// ============================================
// PASO 3: Pintar texto ajeno
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('--- Paso 3: innerHTML con y sin escapar ---');
//   const evil = { id: 9, name: '<img src="nada.png" onerror="console.log(\'  💥 se ha ejecutado código de la ficha\')">' };
//   $('#list').innerHTML = `<div class="card">${evil.name}</div>`;
//   await wait(200);
//   console.log('  sin escapar: imágenes en la lista =', $('#list').querySelectorAll('img').length);
//   $('#list').innerHTML = `<div class="card">${escapeHtml(evil.name)}</div>`;
//   await wait(200);
//   console.log('  con escapeHtml: imágenes en la lista =', $('#list').querySelectorAll('img').length);
//   console.log('  se ve como texto:', $('#list').textContent.slice(0, 20) + '…');
//   paintCards(ITEMS);
// });

// ============================================
// PASO 4: Listeners que se pierden al repintar
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('--- Paso 4: Un listener por botón o uno en la lista ---');
//   let perButton = 0;
//   let delegated = 0;
//   paintCards(ITEMS);
//   for (const button of $('#list').querySelectorAll('button')) button.addEventListener('click', () => (perButton += 1));
//   $('#list').addEventListener('click', (event) => {
//     if (event.target.closest('button')) delegated += 1;
//   });
//   $('#list').querySelector('button').click();
//   console.log(`  antes de repintar: por botón ${perButton}, delegado ${delegated}`);
//   paintCards(ITEMS);                    // la lista se repinta: los botones son nuevos
//   $('#list').querySelector('button').click();
//   console.log(`  después de repintar: por botón ${perButton}, delegado ${delegated}`);
// });

// ============================================
// PASO 5: El doble envío
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('--- Paso 5: Dos clics seguidos en Guardar ---');
//   let sent = 0;
//   let protect = false;
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     if (protect) $('#send').disabled = true;
//     sent += 1;
//     await fakeApi(null, 200);           // el «POST» tarda 200 ms
//     $('#send').disabled = false;
//   };
//   $('#form').addEventListener('submit', onSubmit);
//   $('#send').click();
//   $('#send').click();
//   await wait(300);
//   console.log('  sin desactivar el botón:', sent, 'envíos');
//   sent = 0;
//   protect = true;
//   $('#send').click();
//   $('#send').click();
//   await wait(300);
//   console.log('  desactivando el botón mientras se envía:', sent, 'envío');
//   $('#form').removeEventListener('submit', onSubmit);
// });

// ============================================
// PASO 6: Llevar el foco al primer error
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('--- Paso 6: Errores al enviar ---');
//   const onSubmit = (event) => {
//     event.preventDefault();
//     const errors = {};
//     for (const input of $('#form').querySelectorAll('input')) {
//       if (input.value.trim() === '') errors[input.name] = 'Obligatorio';
//       input.setAttribute('aria-invalid', String(input.name in errors));
//     }
//     const first = Object.keys(errors)[0];
//     if (first) $(`#${first}`).focus();
//     console.log('  errores:', JSON.stringify(errors), '· foco en:', document.activeElement.id || document.activeElement.tagName);
//   };
//   $('#form').addEventListener('submit', onSubmit);
//   $('#send').click();
//   $('#name').value = 'Vega';
//   $('#send').click();
//   $('#type').value = 'Estrella';
//   $('#send').click();
//   console.log('\n✅ Lab completado.');
// });

// Ejecuta los pasos descomentados, uno detrás de otro.
(async () => {
  for (const step of steps) await step();
})();
