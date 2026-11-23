/**
 * 📘 Lab 03: IndexedDB
 * Este es un lab guiado. Descomenta el código de cada paso, guarda y recarga la página.
 *
 * Abre starter/index.html en el navegador y mira la consola de las DevTools (F12).
 * Los pasos van en orden: del 2 en adelante usan la base que abre el paso 1.
 */

// IndexedDB avisa del resultado con eventos. Estas dos funciones los convierten en promesas
// (semana 13) para poder usar await (semana 14).
const done = (request) =>
  new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
const finished = (transaction) =>
  new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error);
  });

let db;

const main = async () => {
  // Borra la base del lab, para que cada recarga empiece igual.
  await done(indexedDB.deleteDatabase('lab19-acuario'));

  // ============================================
  // PASO 1: Abrir la base y crear el almacén
  // ============================================
  console.log('--- Paso 1: open y upgradeneeded ---');

  // Descomenta las siguientes líneas:
  // const request = indexedDB.open('lab19-acuario', 1);
  // request.onupgradeneeded = (event) => {
  //   console.log(`upgradeneeded: versión ${event.oldVersion} → ${event.newVersion}`);
  //   const store = request.result.createObjectStore('animals', { keyPath: 'id' });
  //   store.createIndex('byTank', 'tank');
  // };
  // db = await done(request);
  // console.log(`Abierta: ${db.name} v${db.version} · almacenes: ${[...db.objectStoreNames].join(', ')}`);

  console.log('');

  // ============================================
  // PASO 2: Escribir en una transacción
  // ============================================
  console.log('--- Paso 2: add en una transacción readwrite ---');

  // Descomenta las siguientes líneas:
  // const animals = [
  //   { id: 1, name: 'Coral', species: 'Pez payaso', tank: 'Arrecife', arrived: new Date('2026-03-02') },
  //   { id: 2, name: 'Luna', species: 'Medusa luna', tank: 'Medusas', arrived: new Date('2026-04-15') },
  //   { id: 3, name: 'Brisa', species: 'Pez cirujano', tank: 'Arrecife', arrived: new Date('2026-05-20') },
  //   { id: 4, name: 'Toto', species: 'Caballito de mar', tank: 'Praderas', arrived: new Date('2026-06-01') },
  // ];
  // const writeTx = db.transaction('animals', 'readwrite');
  // for (const animal of animals) writeTx.objectStore('animals').add(animal);
  // await finished(writeTx);
  // console.log(`Guardados ${animals.length} animales`);

  console.log('');

  // ============================================
  // PASO 3: Leer por clave y leer todo
  // ============================================
  console.log('--- Paso 3: get, getAll y count ---');

  // Descomenta las siguientes líneas:
  // const reader = db.transaction('animals').objectStore('animals');
  // const luna = await done(reader.get(2));
  // console.log(`get(2): ${luna.name} · arrived es Date: ${luna.arrived instanceof Date} (${luna.arrived.toISOString().slice(0, 10)})`);
  // console.log('get(99):', await done(reader.get(99)));
  // const all = await done(reader.getAll());
  // console.log('getAll:', all.map(({ name }) => name).join(', '));
  // console.log('count:', await done(reader.count()));

  console.log('');

  // ============================================
  // PASO 4: Buscar con un índice y con un rango
  // ============================================
  console.log('--- Paso 4: index y IDBKeyRange ---');

  // Descomenta las siguientes líneas:
  // const search = db.transaction('animals').objectStore('animals');
  // const reef = await done(search.index('byTank').getAll('Arrecife'));
  // console.log('En Arrecife:', reef.map(({ name }) => name).join(', '));
  // const middle = await done(search.getAll(IDBKeyRange.bound(2, 3)));
  // console.log('ids 2 a 3:', middle.map(({ name }) => name).join(', '));

  console.log('');

  // ============================================
  // PASO 5: put, delete y una transacción que falla
  // ============================================
  console.log('--- Paso 5: put, delete y abort ---');

  // Descomenta las siguientes líneas:
  // const editTx = db.transaction('animals', 'readwrite');
  // const editStore = editTx.objectStore('animals');
  // editStore.put({ id: 4, name: 'Toto', species: 'Caballito de mar', tank: 'Medusas', arrived: new Date('2026-06-01') });
  // editStore.delete(3);
  // await finished(editTx);
  // const countTx = () => done(db.transaction('animals').objectStore('animals').count());
  // console.log('Tras put y delete:', await countTx(), 'animales');
  //
  // const badTx = db.transaction('animals', 'readwrite');
  // badTx.objectStore('animals').add({ id: 5, name: 'Perla', species: 'Pulpo', tank: 'Rocas', arrived: new Date('2026-07-01') });
  // badTx.objectStore('animals').add({ id: 1, name: 'Repetido', species: '?', tank: '?', arrived: new Date() });
  // try {
  //   await finished(badTx);
  // } catch (error) {
  //   console.log(`La transacción se deshace: ${error.name}`);
  // }
  // console.log('¿Está Perla (id 5)?', await done(db.transaction('animals').objectStore('animals').get(5)));
  // console.log('Siguen:', await countTx(), 'animales');

  console.log('');

  // ============================================
  // PASO 6: Subir de versión
  // ============================================
  console.log('--- Paso 6: Versión 2 y versionchange ---');

  // Descomenta las siguientes líneas:
  // db.onversionchange = () => {
  //   console.log('versionchange: cierro la conexión de la versión 1');
  //   db.close();
  // };
  // const upgrade = indexedDB.open('lab19-acuario', 2);
  // upgrade.onupgradeneeded = (event) => {
  //   console.log(`upgradeneeded: versión ${event.oldVersion} → ${event.newVersion}`);
  //   upgrade.transaction.objectStore('animals').createIndex('bySpecies', 'species');
  // };
  // db = await done(upgrade);
  // const animalsStore = db.transaction('animals').objectStore('animals');
  // console.log(`v${db.version} · índices: ${[...animalsStore.indexNames].join(', ')} · animales: ${await done(animalsStore.count())}`);

  console.log('');
  console.log('✅ Lab completado.');
};

main().catch((error) => console.error(`${error.name}: ${error.message}`));
