/**
 * 📘 Lab 03: Hacer menos trabajo en la página
 * Este es un lab guiado. Abre index.html en el navegador (doble clic) con la consola de las
 * DevTools abierta, descomenta el código de cada paso, guarda y recarga con F5.
 *
 * Cada paso añade a steps una función; al final del archivo se ejecutan en orden, esperando a
 * cada una. Los tiempos dependen de tu equipo y de tu navegador: los tuyos serán otros, pero
 * las conclusiones deberían coincidir con las del README.
 */

const steps = [];
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ms = (value) => `${value.toFixed(1)} ms`;

// La mediana de 5 ejecuciones de fn, en milisegundos (teoría 01).
const timeIt = (fn) => {
  const times = [];
  for (let i = 0; i < 5; i += 1) {
    const start = performance.now();
    fn();
    times.push(performance.now() - start);
  }
  return times.toSorted((a, b) => a - b)[2];
};

const boxes = document.querySelector('#boxes');
for (let i = 0; i < 300; i += 1) boxes.append(Object.assign(document.createElement('div'), { className: 'box' }));
const all = [...boxes.children];

// ============================================
// PASO 1: Leer y escribir medidas por turnos
// ============================================

// Descomenta las siguientes líneas:
// steps.push(() => {
//   console.log('--- Paso 1: Leer, escribir, leer, escribir... ---');
//   const reset = () => all.forEach((box) => (box.style.width = '20px'));
//   reset();
//   const mixed = timeIt(() => {
//     for (const box of all) box.style.width = `${box.offsetWidth + 1}px`;
//   });
//   reset();
//   const batched = timeIt(() => {
//     const widths = all.map((box) => box.offsetWidth);
//     all.forEach((box, i) => (box.style.width = `${widths[i] + 1}px`));
//   });
//   console.log('  leer y escribir alternando:', ms(mixed));
//   console.log('  leer todo y luego escribir todo:', ms(batched));
//   console.log('  por lotes, más rápido:', batched < mixed);
//   reset();
// });

// ============================================
// PASO 2: Insertar muchos elementos
// ============================================

// Descomenta las siguientes líneas:
// steps.push(() => {
//   console.log('\n--- Paso 2: Uno a uno o con un fragmento ---');
//   const list = document.querySelector('#list');
//   const makeItem = (i) => Object.assign(document.createElement('li'), { textContent: `Ficha ${i}` });
//   const oneByOne = timeIt(() => {
//     list.replaceChildren();
//     for (let i = 1; i <= 2000; i += 1) list.append(makeItem(i));
//     list.scrollHeight;
//   });
//   const withFragment = timeIt(() => {
//     list.replaceChildren();
//     const fragment = document.createDocumentFragment();
//     for (let i = 1; i <= 2000; i += 1) fragment.append(makeItem(i));
//     list.append(fragment);
//     list.scrollHeight;
//   });
//   const withReads = timeIt(() => {
//     list.replaceChildren();
//     for (let i = 1; i <= 2000; i += 1) {
//       list.append(makeItem(i));
//       list.scrollHeight;
//     }
//   });
//   console.log('  uno a uno:', ms(oneByOne));
//   console.log('  con un fragmento:', ms(withFragment));
//   console.log('  uno a uno leyendo la altura cada vez:', ms(withReads));
//   console.log('  elementos en la lista:', list.children.length);
// });

// ============================================
// PASO 3: Recordar resultados caros
// ============================================

// Descomenta las siguientes líneas:
// steps.push(() => {
//   console.log('\n--- Paso 3: memoize ---');
//   const countPrimes = (limit) => {
//     let count = 0;
//     for (let n = 2; n <= limit; n += 1) {
//       let prime = true;
//       for (let d = 2; d * d <= n; d += 1) if (n % d === 0) { prime = false; break; }
//       if (prime) count += 1;
//     }
//     return count;
//   };
//   const cache = new Map();
//   const countPrimesCached = (limit) => {
//     if (!cache.has(limit)) cache.set(limit, countPrimes(limit));
//     return cache.get(limit);
//   };
//   for (const limit of [300000, 300000, 100000, 300000]) {
//     const start = performance.now();
//     const result = countPrimesCached(limit);
//     console.log(`  primos hasta ${limit}: ${result} en ${ms(performance.now() - start)}`);
//   }
//   console.log('  resultados guardados:', cache.size);
// });

// ============================================
// PASO 4: Cargar imágenes cuando se van a ver
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('\n--- Paso 4: IntersectionObserver ---');
//   const gallery = document.querySelector('#gallery');
//   const image = (n) =>
//     `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="90"><rect width="160" height="90" fill="#161b22"/><text x="80" y="55" fill="#F7DF1E" font-size="32" text-anchor="middle" font-family="sans-serif">${n}</text></svg>`)}`;
//   for (let n = 1; n <= 30; n += 1) {
//     const figure = document.createElement('figure');
//     figure.append(Object.assign(document.createElement('img'), { alt: `Imagen ${n}`, width: 160, height: 90 }));
//     figure.firstChild.dataset.src = image(n);
//     gallery.append(figure);
//   }
//   const loaded = () => gallery.querySelectorAll('img[src]').length;
//   const observer = new IntersectionObserver((entries) => {
//     for (const entry of entries) {
//       if (!entry.isIntersecting) continue;
//       entry.target.src = entry.target.dataset.src;
//       observer.unobserve(entry.target);
//     }
//   }, { rootMargin: '100px' });
//   for (const img of gallery.querySelectorAll('img')) observer.observe(img);
//   await wait(300);
//   console.log('  imágenes cargadas al empezar:', loaded(), 'de 30');
//   gallery.children[14].scrollIntoView();
//   await wait(300);
//   console.log('  tras bajar hasta la 15:', loaded(), 'de 30');
//   gallery.lastElementChild.scrollIntoView();
//   await wait(300);
//   console.log('  tras bajar hasta el final:', loaded(), 'de 30');
//   window.scrollTo(0, 0);
// });

// ============================================
// PASO 5: Un cambio por fotograma
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('\n--- Paso 5: requestAnimationFrame ---');
//   let events = 0;
//   let paints = 0;
//   let lastX = 0;
//   let frame = null;
//   const paint = () => {
//     paints += 1;
//     frame = null;
//     all[0].style.width = `${20 + lastX / 10}px`;
//   };
//   const onMove = (event) => {
//     events += 1;
//     lastX = event.clientX;
//     if (frame === null) frame = requestAnimationFrame(paint);
//   };
//   boxes.addEventListener('pointermove', onMove);
//   for (let x = 1; x <= 100; x += 1) boxes.dispatchEvent(new PointerEvent('pointermove', { clientX: x }));
//   await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
//   console.log('  eventos:', events, '· veces pintado:', paints, '· último x:', lastX);
//   console.log('  ancho de la primera caja:', all[0].style.width);
//   boxes.removeEventListener('pointermove', onMove);
//   all[0].style.width = '20px';
// });

// ============================================
// PASO 6: Tareas largas
// ============================================

// Descomenta las siguientes líneas:
// steps.push(async () => {
//   console.log('\n--- Paso 6: Tareas largas ---');
//   console.log('  ¿el navegador avisa de tareas largas?', PerformanceObserver.supportedEntryTypes.includes('longtask'));
//   const long = [];
//   const observer = new PerformanceObserver((list) => long.push(...list.getEntries()));
//   observer.observe({ type: 'longtask' });
//   const busy = (ms) => {
//     const end = performance.now() + ms;
//     while (performance.now() < end);
//   };
//   busy(150);
//   await wait(100);
//   console.log('  150 ms seguidos:', long.length, 'tarea larga de unos', Math.round((long[0]?.duration ?? 0) / 10) * 10, 'ms');
//   long.length = 0;
//   for (let i = 0; i < 10; i += 1) {
//     busy(15);
//     await wait(0);
//   }
//   await wait(100);
//   console.log('  10 trozos de 15 ms:', long.length, 'tareas largas');
//   observer.disconnect();
//   console.log('\n✅ Lab completado.');
// });

// Ejecuta los pasos descomentados, uno detrás de otro.
(async () => {
  for (const step of steps) await step();
})();
