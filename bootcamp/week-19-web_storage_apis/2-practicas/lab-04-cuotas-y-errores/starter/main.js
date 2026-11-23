/**
 * 📘 Lab 04: Cuotas, errores y caducidad
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Cada paso es independiente, salvo el 4, que necesita el almacenamiento lleno del paso 3.
 */

const removeByPrefix = (storage, prefix) => {
  for (const key of Object.keys(storage)) {
    if (key.startsWith(prefix)) storage.removeItem(key);
  }
};
removeByPrefix(localStorage, 'lab19:');

const main = async () => {
  // ============================================
  // PASO 1: ¿Se puede usar el almacenamiento?
  // ============================================
  console.log('--- Paso 1: Comprobar antes de usar ---');

  // Descomenta las siguientes líneas:
  // const canUse = (getStorage) => {
  //   try {
  //     const storage = getStorage();
  //     storage.setItem('lab19:probe', 'probe');
  //     storage.removeItem('lab19:probe');
  //     return true;
  //   } catch (error) {
  //     console.log(`  No disponible: ${error.name}`);
  //     return false;
  //   }
  // };
  // console.log('localStorage:', canUse(() => localStorage));
  // console.log('sessionStorage:', canUse(() => sessionStorage));
  // const blocked = () => {
  //   throw new DOMException('Access is denied for this document.', 'SecurityError');
  // };
  // console.log('Bloqueado:', canUse(blocked));

  console.log('');

  // ============================================
  // PASO 2: Cuánto ocupa lo que guardas
  // ============================================
  console.log('--- Paso 2: Medir ---');

  // Descomenta las siguientes líneas:
  // localStorage.setItem('lab19:tanks', JSON.stringify(['Arrecife', 'Medusas', 'Praderas']));
  // localStorage.setItem('lab19:greeting', 'Bienvenida, ¡buen día! 🐙');
  // const sizeOf = (storage, prefix) =>
  //   Object.keys(storage)
  //     .filter((key) => key.startsWith(prefix))
  //     .reduce((total, key) => total + key.length + storage.getItem(key).length, 0);
  // const chars = sizeOf(localStorage, 'lab19:');
  // console.log(`Caracteres (clave + valor): ${chars} · en UTF-16: ${chars * 2} bytes`);
  // console.log('Longitud de «🐙»:', '🐙'.length);

  console.log('');

  // ============================================
  // PASO 3: Llenar hasta QuotaExceededError
  // ============================================
  console.log('--- Paso 3: Hasta dónde cabe ---');

  // Descomenta las siguientes líneas:
  // const chunk = 'x'.repeat(256 * 1024); // 256 Ki caracteres
  // let stored = 0;
  // try {
  //   for (let i = 0; ; i += 1) {
  //     localStorage.setItem(`lab19:fill:${i}`, chunk);
  //     stored += chunk.length;
  //   }
  // } catch (error) {
  //   const isQuota = error instanceof DOMException && error.name === 'QuotaExceededError';
  //   console.log(`${error.name} · ¿es de cuota? ${isQuota}`);
  // }
  // console.log(`Cupieron ${stored / 1024 / 1024} Mi caracteres de relleno`);

  console.log('');

  // ============================================
  // PASO 4: Un guardado que no rompe la página
  // ============================================
  console.log('--- Paso 4: save con resultado ---');

  // Descomenta las siguientes líneas:
  // const save = (key, value) => {
  //   try {
  //     localStorage.setItem(key, JSON.stringify(value));
  //     return { ok: true };
  //   } catch (error) {
  //     if (error instanceof DOMException && error.name === 'QuotaExceededError') return { ok: false, reason: 'quota' };
  //     throw error;
  //   }
  // };
  // const visit = { tank: 'Arrecife', notes: 'x'.repeat(300 * 1024) };
  // console.log('Con el almacenamiento lleno:', JSON.stringify(save('lab19:visit', visit)));
  // removeByPrefix(localStorage, 'lab19:fill:');
  // console.log('Tras liberar espacio:', JSON.stringify(save('lab19:visit', visit)));

  console.log('');

  // ============================================
  // PASO 5: Datos que caducan
  // ============================================
  console.log('--- Paso 5: Caducidad ---');

  // Descomenta las siguientes líneas:
  // const HOUR = 60 * 60 * 1000;
  // const setWithExpiry = (key, value, ttl, now) =>
  //   localStorage.setItem(key, JSON.stringify({ value, expiresAt: now + ttl }));
  // const getWithExpiry = (key, now) => {
  //   const text = localStorage.getItem(key);
  //   if (text === null) return null;
  //   const { value, expiresAt } = JSON.parse(text);
  //   if (now >= expiresAt) {
  //     localStorage.removeItem(key);
  //     return null;
  //   }
  //   return value;
  // };
  // const start = Date.parse('2026-11-23T09:00:00Z');
  // setWithExpiry('lab19:schedule', ['10:00 alimentación', '12:00 charla'], 2 * HOUR, start);
  // console.log('A las 10:00:', JSON.stringify(getWithExpiry('lab19:schedule', start + HOUR)));
  // console.log('A las 11:00:', JSON.stringify(getWithExpiry('lab19:schedule', start + 2 * HOUR)));
  // console.log('¿Sigue la clave?', localStorage.getItem('lab19:schedule'));

  console.log('');

  // ============================================
  // PASO 6: Lo que dice el navegador y la limpieza
  // ============================================
  console.log('--- Paso 6: navigator.storage y limpiar ---');

  // Descomenta las siguientes líneas:
  // const { quota, usage } = await navigator.storage.estimate();
  // console.log(`Cuota del origen: ${(quota / 1024 ** 3).toFixed(1)} GiB · en uso: ${usage} bytes`);
  // console.log('¿Persistente?', await navigator.storage.persisted());
  // console.log('Claves lab19 antes:', Object.keys(localStorage).filter((key) => key.startsWith('lab19:')).length);
  // removeByPrefix(localStorage, 'lab19:');
  // console.log('Claves lab19 después:', Object.keys(localStorage).filter((key) => key.startsWith('lab19:')).length);

  console.log('');
  console.log('✅ Lab completado.');
};

main().catch((error) => console.error(`${error.name}: ${error.message}`));
