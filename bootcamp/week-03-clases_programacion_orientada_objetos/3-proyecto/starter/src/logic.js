// Lógica de la colección: clases sin DOM ni localStorage.
// types.js define los tipos del dominio, main.js pinta la página y scripts/verificar-semana.sh lo comprueba desde Node.
// Completa cada TODO siguiendo 3-proyecto/README.md.

// Un elemento del catálogo. types.js crea las clases hijas de tu dominio.
export class Item {
  static type = 'item';
  // TODO paso 2: un contador estático privado para el id, que empieza en 1.
  // TODO paso 3: un campo privado para el nombre.

  // TODO paso 2: guarda id (el contador, que después sube en 1), name, description y active (true).
  // new Item('Marte') → { id: 1, name: 'Marte', description: '', active: true }
  constructor(name, description) {
    // TODO
  }

  // TODO paso 3: getter y setter de name. El setter quita los espacios de los extremos
  // y lanza un Error si el nombre queda vacío.

  // TODO paso 2: getter type que devuelve el type estático de la clase del objeto (this.constructor.type).

  // TODO paso 2: invierte active y devuelve el propio objeto.
  toggle() {
    // TODO
  }

  // TODO paso 2: devuelve '[tipo] nombre'.
  // new Item('Marte').describe() → '[item] Marte'
  describe() {
    // TODO
  }
}

// La colección de elementos. Guarda los Item en un array privado.
export class Collection {
  // TODO paso 5: el array privado de elementos.

  // TODO paso 5: crea una colección y le añade los elementos del array.
  static from(items) {
    // TODO
  }

  // TODO paso 5: getter size (cuántos elementos hay) y getter activeCount (cuántos están activos).

  // TODO paso 5: añade el elemento y devuelve la colección. Si no es un Item, lanza un TypeError.
  add(item) {
    // TODO
  }

  // TODO paso 5: devuelve el elemento con ese id, o undefined.
  find(id) {
    // TODO
  }

  // TODO paso 5: quita el elemento con ese id. Devuelve true si lo quitó y false si no existía.
  remove(id) {
    // TODO
  }

  // TODO paso 6: devuelve un array con los elementos que cumplen los tres filtros.
  // type: 'all' o un tipo; status: 'all' | 'active' | 'inactive'; query: texto en name o description.
  filter(filters) {
    // TODO
  }

  // TODO paso 6: cuenta los elementos de cada tipo: { planet: 2, star: 1 }
  countByType() {
    // TODO
  }
}
