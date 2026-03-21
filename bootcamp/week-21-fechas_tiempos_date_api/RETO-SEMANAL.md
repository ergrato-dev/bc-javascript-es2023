# 🏆 Reto Semanal - Semana 21

## 🎯 Timezone-Aware Scheduler (Opcional)

### Descripción

Construye un programador de eventos que:

1. Reciba fecha/hora local del usuario
2. Almacene referencia temporal consistente
3. Muestre evento en distintas zonas horarias
4. Calcule cuenta regresiva hasta el evento

### Objetivos del reto

- Normalizar timestamps para almacenamiento
- Convertir visualización por zona horaria
- Evitar errores por cambios de horario (DST)
- Proveer feedback temporal claro en UI

### API sugerida

```javascript
const scheduler = createScheduler({ timezone: 'America/Bogota' });

scheduler.addEvent({
  title: 'Recordatorio',
  startsAt: '2026-04-12T14:00:00'
});
```

### Criterios de éxito

| Criterio | Puntos |
|----------|--------|
| Normalización temporal | 25 |
| Conversión de timezone | 25 |
| Cálculo de countdown | 20 |
| Manejo de edge cases | 20 |
| Claridad de implementación | 10 |

### Bonus

- 🌟 Persistencia local del calendario
- 🌟 Recordatorios periódicos
- 🌟 Vista semanal interactiva

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 21](README.md)
