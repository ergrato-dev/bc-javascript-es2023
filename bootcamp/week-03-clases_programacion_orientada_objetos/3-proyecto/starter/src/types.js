// Los tipos de elemento de tu dominio (paso 4). Planetario es solo un ejemplo: cámbialo por el tuyo.
// Cada tipo es una clase hija de Item con un dato propio, que se pide en el formulario.
import { Item } from './logic.js';

export const TITLE = '🔭 Catálogo del planetario';

export class Planet extends Item {
  static type = 'planet'; // clave en inglés y camelCase; la usan los filtros
  static label = '🪐 Planeta'; // lo que se muestra en la página
  static extraLabel = 'Lunas'; // la etiqueta del dato propio en el formulario

  constructor(name, description = '', moons = 0) {
    super(name, description);
    this.moons = Number(moons);
  }

  describe() {
    return `${super.describe()} · ${this.moons} lunas`;
  }
}

export class Star extends Item {
  static type = 'star';
  static label = '⭐ Estrella';
  static extraLabel = 'Magnitud';

  constructor(name, description = '', magnitude = 0) {
    super(name, description);
    this.magnitude = Number(magnitude);
  }

  describe() {
    return `${super.describe()} · magnitud ${this.magnitude}`;
  }
}

// Los tipos que ofrece el formulario, en este orden.
export const ITEM_TYPES = [Planet, Star];

// Los elementos con los que arranca la página.
export const createSamples = () => [
  new Planet('Júpiter', 'Visible al anochecer', 95),
  new Star('Sirio', 'La estrella más brillante', -1.46),
  new Planet('Saturno', 'Anillos visibles con prismáticos', 146),
  new Star('Betelgeuse', 'Hombro de Orión', 0.5),
];
