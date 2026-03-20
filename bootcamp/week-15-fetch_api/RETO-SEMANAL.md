# 🏆 Reto Semanal - Semana 15

## 🎯 API Cache Manager

### Descripción

Crea un sistema de caché inteligente para peticiones fetch que:

1. **Almacena respuestas** en memoria para evitar peticiones duplicadas
2. **Implementa TTL** (Time To Live) para invalidar caché viejo
3. **Maneja stale-while-revalidate** - devuelve caché viejo mientras actualiza en background
4. **Persiste en localStorage** para sobrevivir recargas de página

### Requisitos

```javascript
// API del CacheManager
const cache = new FetchCache({
  ttl: 60_000,              // 1 minuto de validez
  staleWhileRevalidate: true,
  persistKey: 'api-cache'
});

// Uso
const data = await cache.fetch('https://api.example.com/data');
// Primera vez: hace la petición
// Segunda vez: devuelve de caché si no ha expirado
// Si expiró pero staleWhileRevalidate: devuelve viejo y actualiza en background
```

### Funcionalidades

1. **Cache Hit/Miss**: Detectar si la respuesta viene de caché
2. **TTL configurable**: Tiempo de expiración por petición o global
3. **Invalidación manual**: Método para limpiar caché
4. **Estadísticas**: Contar hits, misses, tiempo ahorrado
5. **Request deduplication**: Si hay una petición en vuelo, no hacer otra igual

### Ejemplo de Implementación

```javascript
class FetchCache {
  #cache = new Map();
  #pending = new Map();
  #stats = { hits: 0, misses: 0, timeSaved: 0 };

  constructor(options = {}) {
    this.ttl = options.ttl ?? 5 * 60_000; // 5 minutos por defecto
    this.staleWhileRevalidate = options.staleWhileRevalidate ?? false;
    this.persistKey = options.persistKey;

    // TODO: Cargar de localStorage si persistKey existe
  }

  async fetch(url, options = {}) {
    const cacheKey = this.#getCacheKey(url, options);

    // TODO: Verificar si hay petición en vuelo
    // TODO: Verificar caché (hit/miss)
    // TODO: Si staleWhileRevalidate y caché expirado, devolver viejo y revalidar
    // TODO: Hacer petición si necesario
    // TODO: Guardar en caché
    // TODO: Actualizar estadísticas
  }

  invalidate(urlPattern) {
    // TODO: Invalidar entradas que coincidan con el patrón
  }

  getStats() {
    return { ...this.#stats };
  }
}
```

### Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| Cache básico funcional | 20 |
| TTL implementado | 20 |
| Request deduplication | 20 |
| Stale-while-revalidate | 20 |
| Persistencia en localStorage | 10 |
| Estadísticas precisas | 10 |

### Bonus

- 🌟 Implementar estrategia cache-first vs network-first configurable
- 🌟 Agregar soporte para cache por método HTTP (solo GET por defecto)
- 🌟 Implementar límite de tamaño de caché con LRU eviction

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 15](README.md)
