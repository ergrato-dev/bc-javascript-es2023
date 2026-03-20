# 🏆 Reto Semanal - Semana 16

## 🎯 Offline-First CRUD Queue

### Descripción

Implementa una cola de operaciones CRUD que permita trabajar sin conexión y sincronizar automáticamente cuando vuelva internet.

### Objetivos del reto

1. Guardar operaciones pendientes en `localStorage`
2. Detectar estado de red (`online` / `offline`)
3. Reintentar sincronización con backoff exponencial
4. Resolver conflictos simples por `updatedAt`
5. Mostrar panel de sincronización al usuario

### API esperada

```javascript
const syncQueue = new CrudSyncQueue({
  storageKey: 'pending-crud-ops',
  maxRetries: 5,
  retryBaseMs: 500
});

await syncQueue.enqueue({ method: 'POST', endpoint: '/items', body: { name: 'Nuevo' } });
await syncQueue.flush();
```

### Criterios de éxito

| Criterio | Puntos |
|----------|--------|
| Cola persistente funcional | 25 |
| Reintentos con backoff | 20 |
| Detección online/offline | 20 |
| Resolución básica de conflictos | 20 |
| UI de estado de sincronización | 15 |

### Bonus

- 🌟 Implementar prioridad de operaciones
- 🌟 Agrupar múltiples cambios en un solo PATCH
- 🌟 Exportar historial de sincronización en JSON

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 16](README.md)
