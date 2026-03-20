# 🏆 Reto Semanal - Semana 17

## 🎯 Virtual DOM Manual (Sin Framework)

### Descripción

Construye un renderizador pequeño que compare estado anterior vs nuevo estado y aplique solo cambios mínimos al DOM real.

### Objetivos del reto

1. Mantener una representación de estado anterior
2. Detectar diferencias por clave (`key`) en una lista
3. Actualizar solo nodos modificados
4. Evitar rerender completo del contenedor
5. Medir mejora básica con `performance.now()`

### API esperada

```javascript
const renderer = new MiniRenderer({ container: '#app' });

renderer.render(stateA);
renderer.render(stateB); // aplica diff mínimo
```

### Criterios de éxito

| Criterio | Puntos |
|----------|--------|
| Detección de cambios por clave | 25 |
| Patch de texto/clases sin rerender total | 25 |
| Inserción y eliminación selectiva | 20 |
| Medición de tiempo de actualización | 15 |
| Código limpio y documentado | 15 |

### Bonus

- 🌟 Soporte para atributos dinámicos
- 🌟 Batch de actualizaciones con microtask queue
- 🌟 Modo debug para mostrar operaciones aplicadas

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 17](README.md)
