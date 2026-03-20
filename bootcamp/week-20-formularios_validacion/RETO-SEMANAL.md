# 🏆 Reto Semanal - Semana 20

## 🎯 Validation Rule Engine (Opcional)

### Descripción

Crea un motor de validación reutilizable para formularios que permita:

1. Registrar reglas por campo
2. Ejecutar validación en tiempo real
3. Producir mensajes consistentes
4. Integrar con HTML5 + Constraint Validation API

### Objetivos del reto

- Diseñar API declarativa para reglas
- Soportar validación síncrona por campo
- Exponer resultados para UI (errores, estado válido)
- Evitar duplicación de lógica entre registro y login

### API sugerida

```javascript
const validator = createValidator({
  email: [required(), emailFormat()],
  password: [required(), minLength(8)]
});

const result = validator.validate(formValues);
```

### Criterios de éxito

| Criterio | Puntos |
|----------|--------|
| Diseño de API | 25 |
| Reglas reutilizables | 25 |
| Integración con UI | 20 |
| Manejo de errores | 20 |
| Claridad de código | 10 |

### Bonus

- 🌟 Reglas asíncronas (ej. disponibilidad de usuario)
- 🌟 Internacionalización de mensajes
- 🌟 Modo estricto para sanitización

---

## ⏱️ Tiempo Estimado

2-3 horas adicionales

## 🎓 Nivel

Avanzado - Este reto es **opcional** y no afecta la calificación base.

---

## 🔗 Navegación

[⬅️ Volver a Semana 20](README.md)
