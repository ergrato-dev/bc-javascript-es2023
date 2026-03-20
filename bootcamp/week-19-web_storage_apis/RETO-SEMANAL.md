# 🏆 Reto Semanal - Semana 19

## 🎯 Storage Sync Engine (Opcional)

### Descripción

Construye un motor de sincronización local que:

1. Mantenga estado en memoria
2. Persista en `localStorage`
3. Use IndexedDB para históricos
4. Soporte versión de schema y migraciones simples

### Objetivos del reto

- Implementar `saveState` y `restoreState` robustos
- Diseñar una estrategia de migración por `version`
- Registrar snapshots en IndexedDB
- Recuperar el último estado válido tras fallo de parseo

### API sugerida

```javascript
const engine = createStorageEngine({ key: 'app-state', version: 2 });

engine.save({ filters: { status: 'active' }, items: [] });
const state = await engine.restore();
```

### Criterios de éxito

| Criterio | Puntos |
|----------|--------|
| Persistencia en localStorage | 25 |
| Respaldo histórico en IndexedDB | 25 |
| Recuperación ante errores | 20 |
| Versionado/migración básica | 20 |
| Código limpio y documentado | 10 |

### Bonus

- 🌟 Compresión simple de payload
- 🌟 Exportar/Importar backup en JSON
- 🌟 Métricas de uso de almacenamiento

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 19](README.md)
