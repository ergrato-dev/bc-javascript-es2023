/**
 * 📘 Ejercicio 04: Imports Avanzados
 *
 * Archivo: loader.js - Module Registry
 *
 * Este es un ejercicio guiado. Descomenta el código para
 * implementar un sistema de carga y cache de módulos.
 */

// ============================================
// PASO 1: Clase ModuleLoader
// ============================================

// El ModuleLoader cachea módulos para evitar cargas repetidas
// Descomenta la clase completa:

// class ModuleLoader {
//   constructor() {
//     // Map para almacenar módulos cargados
//     this.cache = new Map();
//     // Map para promesas de carga en progreso
//     this.loading = new Map();
//   }
//
//   // PASO 2: Método load(name, path)
//   // Carga un módulo con cache
//   async load(name, path) {
//     // Si ya está en cache, retornarlo inmediatamente
//     if (this.cache.has(name)) {
//       console.log(`📦 ${name}: desde cache`);
//       return this.cache.get(name);
//     }
//
//     // Si está cargando, esperar esa promesa
//     if (this.loading.has(name)) {
//       console.log(`⏳ ${name}: esperando carga existente`);
//       return this.loading.get(name);
//     }
//
//     // Iniciar nueva carga
//     console.log(`🔄 ${name}: cargando...`);
//     const loadPromise = import(path).then(module => {
//       // Guardar en cache (usar default si existe, sino el módulo completo)
//       const moduleValue = module.default || module;
//       this.cache.set(name, moduleValue);
//       this.loading.delete(name);
//       console.log(`✅ ${name}: cargado y cacheado`);
//       return moduleValue;
//     });
//
//     this.loading.set(name, loadPromise);
//     return loadPromise;
//   }
//
//   // PASO 3: Método isLoaded(name)
//   // Verifica si un módulo está en cache
//   isLoaded(name) {
//     return this.cache.has(name);
//   }
//
//   // PASO 4: Método getLoadedModules()
//   // Retorna lista de módulos cargados
//   getLoadedModules() {
//     return Array.from(this.cache.keys());
//   }
//
//   // PASO 5: Métodos clear(name) y clearAll()
//   // Limpiar cache
//   clear(name) {
//     if (this.cache.has(name)) {
//       this.cache.delete(name);
//       console.log(`🗑️ ${name}: eliminado del cache`);
//       return true;
//     }
//     return false;
//   }
//
//   clearAll() {
//     const count = this.cache.size;
//     this.cache.clear();
//     this.loading.clear();
//     console.log(`🗑️ Cache limpiado (${count} módulos)`);
//   }
// }

// ============================================
// PASO 6: Exportar Singleton
// ============================================

// Creamos una única instancia (patrón Singleton)
// Descomenta las siguientes líneas:

// const moduleLoader = new ModuleLoader();
// export { moduleLoader };
// export default moduleLoader;

// ============================================
// Versión temporal para que el archivo sea válido
// (elimina esto cuando descomentes la clase)
// ============================================

class ModuleLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
  }

  async load(name, path) {
    console.log('⚠️ Descomenta la clase ModuleLoader en loader.js');
    return {};
  }

  isLoaded(name) {
    return false;
  }

  getLoadedModules() {
    return [];
  }

  clear(name) {
    return false;
  }

  clearAll() {}
}

const moduleLoader = new ModuleLoader();
export { moduleLoader };
export default moduleLoader;
