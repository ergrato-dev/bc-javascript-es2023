# 🎯 Reto Semanal - Week 06

## 📺 Video de la Semana

[![Video Week 06](https://img.shields.io/badge/YouTube-Video_Week_06-red?style=for-the-badge&logo=youtube)](https://youtube.com/@bc-channel-epti)

> **Importante**: Mira el video completo antes de realizar el reto. Contiene el **código de verificación** necesario para completar tu autoevaluación.

---

## 🧩 El Reto

### Contexto

Dominas strings modernos, RegExp avanzado, grupos de captura, y el flag `/d` (hasIndices) de ES2022.

### Tu Misión

Crea un **parser de logs** que extraiga información estructurada:

```javascript
const logs = [
  '[2025-01-15 10:30:45] ERROR: Database connection failed at line 42',
  '[2025-01-15 10:31:00] INFO: User #1234 logged in successfully',
  '[2025-01-15 10:32:15] WARN: Memory usage at 85%',
  '[2025-01-15 10:33:30] ERROR: API timeout for endpoint /users'
];

// Implementa parseLog() que use:
// 1. RegExp con grupos nombrados (?<nombre>)
// 2. matchAll() para múltiples coincidencias
// 3. Flag /d para obtener índices de cada grupo

const resultado = parseLog(logs[0]);
// {
//   fecha: '2025-01-15',
//   hora: '10:30:45',
//   nivel: 'ERROR',
//   mensaje: 'Database connection failed at line 42',
//   indices: {
//     fecha: [1, 11],
//     hora: [12, 20],
//     nivel: [22, 27]
//   }
// }
```

**Bonus**: Implementa `filtrarPorNivel(logs, 'ERROR')` usando tus funciones.

---

## ✅ Requisitos de Entrega

### Paso 1: Resuelve el reto
- Usa RegExp con grupos nombrados `(?<nombre>...)`
- Usa el flag `/d` para obtener índices
- Usa `matchAll()` para procesar múltiples logs

### Paso 2: Comenta en YouTube (REQUERIDO)

Deja un comentario en el video de esta semana con el siguiente formato:

```
✅ RETO WEEK-06 COMPLETADO

Mi regex para parsear logs: [comparte tu patrón]

📍 ¿Para qué sirve el flag /d (hasIndices) en la vida real?
[Tu caso de uso]
```

### Paso 3: Autoevaluación

Completa el [formulario de autoevaluación](https://forms.gle/PLACEHOLDER_WEEK06):

- Código de verificación del video
- **Link a tu comentario en YouTube**
- Link a tu código

---

## 💡 Pregunta de Reflexión

> **¿Cuándo necesitarías los índices exactos de una coincidencia en regex?**

Incluye tu respuesta en el comentario de YouTube (piensa en syntax highlighting, editores, linters).

---

## 🏆 Criterios de Éxito

| Criterio | Puntos |
|----------|--------|
| RegExp con grupos nombrados | 25 |
| Usa flag /d correctamente | 20 |
| Usa matchAll() | 15 |
| Extrae todos los campos | 20 |
| Comentario en YouTube completo | 20 |
| **Total** | **100** |

---

## 🔗 Recursos

- [Video de la semana](https://youtube.com/@bc-channel-epti)
- [MDN: RegExp hasIndices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
- [MDN: Named capturing groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)

---

_Reto Week 06 | Bootcamp JavaScript ES2023 | [bc-channel-epti](https://youtube.com/@bc-channel-epti)_
