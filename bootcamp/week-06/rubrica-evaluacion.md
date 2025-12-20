# Rúbrica de Evaluación - Week 06

## 📊 Peso de evidencias
- Conocimiento 🧠: 30% (quiz, preguntas sobre métodos y RegExp)
- Desempeño 💪: 40% (4 prácticas)
- Producto 📦: 30% (Proyecto Text & Pattern Toolkit)

## ✅ Criterios por evidencia

### Conocimiento (30%)
- Identifica métodos de string y sus casos de uso (includes, replaceAll, padStart/End).
- Explica flags de RegExp (g, i, m, s, u, y) y su efecto.
- Describe cuantificadores, anclas y grupos de captura/no-captura.
- Reconoce riesgos comunes (catastrophic backtracking, escapes, sanitización).

### Desempeño (40%)
- Aplica normalización y limpieza de texto (espacios, casing, acentos) sin romper datos.
- Construye RegExp correctas para extracción (emails, URLs, tokens) con validaciones básicas.
- Implementa validaciones robustas con mensajes claros y casos límite.
- Usa matchAll/replaceAll y captura de grupos para resaltar o transformar texto.

### Producto (30%)
- Toolkit implementa flujos de normalizar, buscar, reemplazar y resaltar.
- Soporta patrones configurables con flags y opciones.
- Maneja errores de usuario (patrones inválidos) sin romper la app.
- Código limpio: funciones pequeñas, nombres claros, sin duplicación.

## 🚦 Niveles de logro
- Excelente: Cumple todo y añade casos edge (emoji/UTF-16, multiline con ^/$, lookarounds correctos).
- Satisfactorio: Cumple requerimientos, cubre casos comunes.
- En progreso: Faltan casos borde o manejo de errores.

## 🧪 Recomendaciones de prueba
- Probar con strings con tildes, ñ, emoji, saltos de línea.
- Validar flags combinados (gi, gm, gy, su).
- Ensayar patrones inválidos y capturar errores con try/catch.

