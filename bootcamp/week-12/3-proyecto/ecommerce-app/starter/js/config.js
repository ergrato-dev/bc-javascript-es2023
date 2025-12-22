/**
 * Configuration and initial data for the E-commerce App
 * Week 12: Proyecto Integrador
 */

// ============================================
// APP CONFIGURATION
// ============================================

export const APP_CONFIG = {
  name: 'TechStore',
  currency: 'USD',
  currencySymbol: '$',
  freeShippingThreshold: 100,
  maxQuantityPerItem: 10,
};

// ============================================
// STORAGE KEYS
// ============================================

export const STORAGE_KEYS = {
  cart: 'techstore_cart',
  user: 'techstore_user',
  session: 'techstore_session',
};

// ============================================
// CATEGORIES
// ============================================

export const CATEGORIES = ['laptops', 'phones', 'tablets', 'accessories'];

// ============================================
// INITIAL PRODUCTS DATA
// ============================================

export const INITIAL_PRODUCTS = [
  {
    id: '1',
    name: 'MacBook Pro 14"',
    description: 'Apple M3 Pro chip, 18GB RAM, 512GB SSD',
    price: 1999,
    category: 'laptops',
    image: '💻',
    stock: 10,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'A17 Pro chip, 256GB, Titanium Design',
    price: 999,
    category: 'phones',
    image: '📱',
    stock: 25,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'iPad Pro 12.9"',
    description: 'M2 chip, 256GB, Liquid Retina XDR',
    price: 1099,
    category: 'tablets',
    image: '📱',
    stock: 15,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'AirPods Pro 2',
    description: 'Active Noise Cancellation, USB-C',
    price: 249,
    category: 'accessories',
    image: '🎧',
    stock: 50,
    rating: 4.8,
  },
  {
    id: '5',
    name: 'Dell XPS 15',
    description: 'Intel i7, 16GB RAM, 512GB SSD, OLED Display',
    price: 1799,
    category: 'laptops',
    image: '💻',
    stock: 8,
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Snapdragon 8 Gen 3, 256GB, S Pen included',
    price: 1199,
    category: 'phones',
    image: '📱',
    stock: 20,
    rating: 4.7,
  },
  {
    id: '7',
    name: 'Samsung Galaxy Tab S9',
    description: 'Snapdragon 8 Gen 2, 128GB, AMOLED Display',
    price: 849,
    category: 'tablets',
    image: '📱',
    stock: 12,
    rating: 4.5,
  },
  {
    id: '8',
    name: 'Sony WH-1000XM5',
    description: 'Wireless Noise Cancelling Headphones',
    price: 399,
    category: 'accessories',
    image: '🎧',
    stock: 30,
    rating: 4.9,
  },
  {
    id: '9',
    name: 'ThinkPad X1 Carbon',
    description: 'Intel i7, 32GB RAM, 1TB SSD, 14" 2.8K OLED',
    price: 2199,
    category: 'laptops',
    image: '💻',
    stock: 5,
    rating: 4.7,
  },
  {
    id: '10',
    name: 'Google Pixel 8 Pro',
    description: 'Tensor G3, 128GB, AI Photography',
    price: 899,
    category: 'phones',
    image: '📱',
    stock: 18,
    rating: 4.6,
  },
  {
    id: '11',
    name: 'Apple Watch Ultra 2',
    description: 'GPS + Cellular, Titanium, 49mm',
    price: 799,
    category: 'accessories',
    image: '⌚',
    stock: 22,
    rating: 4.8,
  },
  {
    id: '12',
    name: 'Magic Keyboard',
    description: 'Wireless, Touch ID, Numeric Keypad',
    price: 199,
    category: 'accessories',
    image: '⌨️',
    stock: 40,
    rating: 4.4,
  },
];

// ============================================
// SORT OPTIONS
// ============================================

export const SORT_OPTIONS = {
  default: { field: null, order: null },
  'price-asc': { field: 'price', order: 'asc' },
  'price-desc': { field: 'price', order: 'desc' },
  'name-asc': { field: 'name', order: 'asc' },
  'name-desc': { field: 'name', order: 'desc' },
  rating: { field: 'rating', order: 'desc' },
};
