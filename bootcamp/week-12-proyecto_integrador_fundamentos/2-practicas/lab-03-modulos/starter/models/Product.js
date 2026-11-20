// Un módulo puede tener un export por defecto (la clase) y además exports con nombre.
export default class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

export const MAX_PRICE = 10000;
