/**
 * Product Service
 * Handles product catalog operations
 */

import { Product } from '../models/Product.js';
import { INITIAL_PRODUCTS, SORT_OPTIONS } from '../config.js';

class ProductServiceClass {
  // TODO: Declarar campos privados
  // #products; // Map<id, Product>

  constructor() {
    // TODO: Inicializar Map de productos
    // this.#products = new Map();
    // this.#loadInitialProducts();
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  /**
   * Load initial products into the catalog
   * @private
   */
  #loadInitialProducts() {
    // TODO: Crear Products desde INITIAL_PRODUCTS y agregarlos al Map
    // INITIAL_PRODUCTS.forEach(data => {
    //   const product = Product.create(data);
    //   this.#products.set(product.id, product);
    // });
  }

  // ============================================
  // GETTERS
  // ============================================

  /**
   * Get all products as array
   * @returns {Product[]}
   */
  getAll() {
    // TODO: Retornar array de todos los productos
    // return [...this.#products.values()];
    return [];
  }

  /**
   * Get product by ID
   * @param {string} id
   * @returns {Product|undefined}
   */
  getById(id) {
    // TODO: Buscar producto por ID
    // return this.#products.get(id);
    return undefined;
  }

  /**
   * Get total count of products
   * @returns {number}
   */
  get count() {
    // TODO: Retornar cantidad de productos
    return 0;
  }

  // ============================================
  // FILTERING
  // ============================================

  /**
   * Filter products by category
   * @param {string} category - Category to filter
   * @returns {Product[]}
   */
  filterByCategory(category) {
    // TODO: Filtrar productos por categoría
    // Si category está vacío, retornar todos
    // return this.getAll().filter(p => p.category === category);
    return [];
  }

  /**
   * Filter products by price range
   * @param {number} min - Minimum price
   * @param {number} max - Maximum price
   * @returns {Product[]}
   */
  filterByPriceRange(min = 0, max = Infinity) {
    // TODO: Filtrar productos por rango de precio
    // return this.getAll().filter(p => p.price >= min && p.price <= max);
    return [];
  }

  /**
   * Filter products that are in stock
   * @returns {Product[]}
   */
  filterInStock() {
    // TODO: Retornar productos con stock > 0
    return [];
  }

  // ============================================
  // SEARCHING
  // ============================================

  /**
   * Search products by name
   * @param {string} query - Search query
   * @returns {Product[]}
   */
  search(query) {
    // TODO: Buscar productos cuyo nombre contenga el query
    // Usar toLowerCase() para búsqueda case-insensitive
    // También buscar en descripción
    // const lowerQuery = query.toLowerCase();
    // return this.getAll().filter(p =>
    //   p.name.toLowerCase().includes(lowerQuery) ||
    //   p.description.toLowerCase().includes(lowerQuery)
    // );
    return [];
  }

  // ============================================
  // SORTING
  // ============================================

  /**
   * Sort products by field
   * @param {Product[]} products - Products to sort
   * @param {string} sortKey - Sort option key
   * @returns {Product[]}
   */
  sort(products, sortKey = 'default') {
    // TODO: Ordenar productos según SORT_OPTIONS
    // const { field, order } = SORT_OPTIONS[sortKey] ?? SORT_OPTIONS.default;
    //
    // if (!field) return [...products];
    //
    // return [...products].sort((a, b) => {
    //   const aVal = a[field];
    //   const bVal = b[field];
    //
    //   if (typeof aVal === 'string') {
    //     return order === 'asc'
    //       ? aVal.localeCompare(bVal)
    //       : bVal.localeCompare(aVal);
    //   }
    //
    //   return order === 'asc' ? aVal - bVal : bVal - aVal;
    // });
    return products;
  }

  // ============================================
  // COMBINED QUERY
  // ============================================

  /**
   * Query products with multiple filters
   * @param {Object} options - Query options
   * @returns {Product[]}
   */
  query({
    category = '',
    search = '',
    minPrice = 0,
    maxPrice = Infinity,
    sortBy = 'default',
  } = {}) {
    // TODO: Aplicar filtros en cadena
    // let results = this.getAll();
    //
    // // Filter by category
    // if (category) {
    //   results = results.filter(p => p.category === category);
    // }
    //
    // // Filter by search
    // if (search) {
    //   const lowerSearch = search.toLowerCase();
    //   results = results.filter(p =>
    //     p.name.toLowerCase().includes(lowerSearch) ||
    //     p.description.toLowerCase().includes(lowerSearch)
    //   );
    // }
    //
    // // Filter by price
    // results = results.filter(p => p.price >= minPrice && p.price <= maxPrice);
    //
    // // Sort
    // results = this.sort(results, sortBy);
    //
    // return results;
    return [];
  }

  // ============================================
  // CATEGORIES
  // ============================================

  /**
   * Get all unique categories
   * @returns {string[]}
   */
  getCategories() {
    // TODO: Extraer categorías únicas usando Set
    // const categories = new Set(this.getAll().map(p => p.category));
    // return [...categories];
    return [];
  }

  /**
   * Get product count by category
   * @returns {Object} - { category: count }
   */
  getCountByCategory() {
    // TODO: Contar productos por categoría usando reduce
    // return this.getAll().reduce((acc, product) => {
    //   acc[product.category] = (acc[product.category] ?? 0) + 1;
    //   return acc;
    // }, {});
    return {};
  }
}

// Export singleton instance
export const ProductService = new ProductServiceClass();
