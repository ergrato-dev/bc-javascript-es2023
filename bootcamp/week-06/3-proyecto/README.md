# Proyecto - Text & Pattern Toolkit

Mini herramienta para normalizar, validar, buscar, reemplazar y resaltar patrones en texto usando strings y RegExp.

## 🎯 Objetivos
- Aplicar métodos de string y RegExp en un flujo integrado.
- Manejar entradas de usuario con seguridad (escapado y validación de patrones).
- Entregar una API simple (CLI o módulo) para operar sobre texto.

![Flujo del toolkit](../0-assets/06-text-pattern-toolkit.svg)

## 🧩 Requerimientos
- Funciones mínimas:
  - `normalize(text, opts)` (trim, lower, opcional diacríticos/puntuación)
  - `validate(text, validations)` (usa reglas: password, phone, slug + custom RegExp)
  - `extract(text, type)` (emails, urls, tags) y `extractCustom(text, pattern)`
  - `highlight(text, pattern, flags)` (usa matchAll, retorna string con <mark>)
  - `replace(text, pattern, replacement, flags)` (seguro y con captura de grupos)
- Manejo de errores de RegExp inválidos (try/catch, mensaje claro).
- No mutar inputs; retornar nuevos strings/objetos.

## 🗂️ Entregables
- `starter/`: esqueletos de funciones y flujo de CLI/simple UI
- `solution/`: implementación de referencia

## 🚦 Criterios de aceptación
- Funciones puras y testeables.
- Manejo de flags seguro (`g` incluido para matchAll/highlight).
- Respuesta clara ante patrones inválidos (no romper ejecución).

## 💻 Ejecución
- Opcional CLI: `node app.js "texto" --pattern="foo" --flags="gi"`
- Usa `pnpm`/`yarn` si agregas dependencias (evitar npm).

## 🧪 Casos a cubrir
- Emoji y caracteres Unicode (usar flag `u` cuando corresponda).
- Múltiples coincidencias y resaltado sin superponer.
- Inputs vacíos o nulos (retornar valores seguros).

