/**
 * 📘 Lab 03: Contenido, atributos y clases
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 */

const card = document.querySelector('#card');
const note = card.querySelector('.note');
const extra = card.querySelector('.extra');
const nameInput = document.querySelector('#name');
const visible = document.querySelector('#visible');
const featureButton = document.querySelector('#feature');

// ============================================
// PASO 1: Leer el contenido
// ============================================
console.log('--- Paso 1: Leer ---');

// Descomenta las siguientes líneas:
// console.log('textContent:', JSON.stringify(note.textContent));
// console.log('innerText:', JSON.stringify(note.innerText));
// console.log('innerHTML:', JSON.stringify(note.innerHTML));

console.log('');

// ============================================
// PASO 2: Escribir texto o HTML
// ============================================
console.log('--- Paso 2: Escribir ---');

// Descomenta las siguientes líneas:
// const comment = 'Come <b>cangrejos</b>';
//
// extra.textContent = comment;
// console.log('Con textContent → hijos:', extra.children.length, '· se ve:', extra.innerText);
//
// extra.innerHTML = comment;
// console.log('Con innerHTML → hijos:', extra.children.length, '· se ve:', extra.innerText);

console.log('');

// ============================================
// PASO 3: Un texto del usuario no es HTML
// ============================================
console.log('--- Paso 3: Inyección de HTML ---');

// Descomenta las siguientes líneas:
// // Un texto escrito por alguien en un formulario o guardado en una API.
// const evil = 'Pulpo<img src="no-existe" onerror="document.title = \'¡Página atacada!\'">';
//
// extra.innerHTML = evil;
// const injected = extra.querySelector('img');
// console.log('¿Hay <img>?', injected !== null, '· onerror:', injected?.getAttribute('onerror'));
//
// extra.textContent = evil;
// console.log('Con textContent → ¿hay <img>?', extra.querySelector('img') !== null);
// console.log('Se ve:', extra.textContent);

console.log('');

// ============================================
// PASO 4: Atributos y propiedades
// ============================================
console.log('--- Paso 4: Atributos y propiedades ---');

// Descomenta las siguientes líneas:
// nameInput.value = 'Medusa luna';
// console.log('value:', nameInput.value, '· atributo value:', nameInput.getAttribute('value'));
// console.log('defaultValue:', nameInput.defaultValue);
//
// visible.checked = false;
// console.log('checked:', visible.checked, '· ¿atributo checked?', visible.hasAttribute('checked'));
//
// card.setAttribute('title', 'Ficha del pulpo');
// console.log('Propiedad title:', card.title);
// card.removeAttribute('title');
// console.log('Tras removeAttribute:', JSON.stringify(card.title));

console.log('');

// ============================================
// PASO 5: classList
// ============================================
console.log('--- Paso 5: classList ---');

// Descomenta las siguientes líneas:
// const classes = () => `[${[...card.classList].join(' ')}]`;
//
// card.classList.add('is-featured', 'is-new');
// console.log('add:', classes());
// card.classList.remove('is-new');
// console.log('remove:', classes());
// console.log('contains is-featured:', card.classList.contains('is-featured'));
//
// console.log('toggle is-closed devuelve', card.classList.toggle('is-closed'), classes());
// console.log('toggle is-closed devuelve', card.classList.toggle('is-closed'), classes());
//
// const open = false;
// card.classList.toggle('is-closed', !open);
// card.classList.toggle('is-closed', !open);
// console.log('toggle con force, dos veces:', classes());
//
// card.classList.replace('is-closed', 'is-open');
// console.log('replace:', classes(), '· className:', card.className);

console.log('');

// ============================================
// PASO 6: Estados que también se oyen
// ============================================
console.log('--- Paso 6: hidden y aria ---');

// Descomenta las siguientes líneas:
// // Pinta el botón y la ficha según un único dato: si está destacada.
// const setFeatured = (featured) => {
//   card.classList.toggle('is-featured', featured);
//   featureButton.setAttribute('aria-pressed', String(featured));
//   featureButton.textContent = featured ? 'Quitar destacado' : 'Destacar';
// };
//
// setFeatured(true);
// console.log('aria-pressed:', featureButton.getAttribute('aria-pressed'), '· texto:', featureButton.textContent);
// setFeatured(false);
// console.log('aria-pressed:', featureButton.getAttribute('aria-pressed'), '· texto:', featureButton.textContent);
//
// const quarantine = note.querySelector('span');
// quarantine.hidden = false;
// console.log('innerText con hidden = false:', JSON.stringify(note.innerText));
//
// console.log('toggleAttribute disabled:', featureButton.toggleAttribute('disabled'), '· disabled:', featureButton.disabled);
// featureButton.toggleAttribute('disabled');

console.log('');

// ============================================
// PASO 7: Estilos en línea y variables CSS
// ============================================
console.log('--- Paso 7: style ---');

// Descomenta las siguientes líneas:
// const title = card.querySelector('.title');
// console.log('Color calculado:', getComputedStyle(title).color);
// console.log('style.color en línea:', JSON.stringify(title.style.color));
//
// card.style.setProperty('--accent', '#3fb950');
// console.log('Tras cambiar --accent:', getComputedStyle(title).color);
// console.log('Atributo style:', card.getAttribute('style'));
//
// card.style.removeProperty('--accent');
// console.log('Tras quitarla:', getComputedStyle(title).color);

console.log('');
console.log('✅ Lab completado.');
