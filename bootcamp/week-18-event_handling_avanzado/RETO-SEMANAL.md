# 🏆 Reto Semanal - Semana 18

## 🎯 Event Bus Minimalista

### Descripción

Crea un `EventBus` en JavaScript puro para desacoplar componentes de UI sin frameworks.

### Objetivos del reto

1. Registrar eventos con `on(eventName, handler)`
2. Desregistrar con `off(eventName, handler)`
3. Emitir eventos con `emit(eventName, payload)`
4. Soportar listeners de ejecución única (`once`)
5. Registrar métricas simples de eventos emitidos

### API esperada

```javascript
const bus = createEventBus();

bus.on('notification:create', payload => {
  console.log('Nueva notificación:', payload);
});

bus.emit('notification:create', { title: 'Evento creado' });
```

### Criterios de éxito

| Criterio | Puntos |
|----------|--------|
| Registro/desregistro correcto | 25 |
| Emisión con payload | 25 |
| Soporte once | 20 |
| Manejo de errores en handlers | 15 |
| Métricas básicas | 15 |

### Bonus

- 🌟 Namespaces de eventos (`ui:modal:open`)
- 🌟 Prioridad de listeners
- 🌟 Inspector de listeners activos

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 18](README.md)
