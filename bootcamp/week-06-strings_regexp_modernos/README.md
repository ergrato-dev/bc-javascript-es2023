# Semana 06 - Strings y RegExp Modernos

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Buscar, rellenar, limpiar, leer y reemplazar texto con `includes`, `startsWith`, `endsWith`, `padStart`, `padEnd`, `trim`, `trimStart`, `trimEnd`, `repeat`, `at` y `replaceAll`.
- Escribir funciones tag para transformar, formatear o escapar los valores de un template literal, y usar `String.raw`.
- Leer y escribir expresiones regulares con clases, cuantificadores, anclas, conjuntos, alternancias, grupos y los flags `g`, `i` y `u`.
- Usarlas con `test`, `match`, `search`, `replace` y `split` para validar y transformar texto.
- Recorrer todas las coincidencias con `matchAll()` y grupos con nombre, y obtener la posición de cada grupo con el flag `d` (ES2022).

## Requisitos previos

- La [semana 02](../week-02-operadores_metodos_modernos_arrays/README.md) (template literals, rest, `reduce`), la [semana 04](../week-04-destructuring_modulos_es2023/README.md) (destructuring y módulos) y la [semana 05](../week-05-arrays_avanzados/README.md) (`Array.from`, `Set`, cadenas de métodos).
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 11.20.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - Métodos de strings](1-teoria/01-string-methods.md) | 25 min | `includes`, `padStart`, `trimStart`, `at`, `replaceAll` |
| [02 - Template literals avanzados](1-teoria/02-template-literals-avanzados.md) | 25 min | Tagged templates y `String.raw` |
| [03 - Fundamentos de RegExp](1-teoria/03-regexp-fundamentos.md) | 25 min | Sintaxis, flags y métodos |
| [04 - Patrones comunes](1-teoria/04-regexp-patterns.md) | 20 min | Validar email, teléfono, URL y contraseñas |
| [05 - matchAll y búsqueda](1-teoria/05-matchall-search.md) | 25 min | `matchAll`, grupos con nombre y flag `d` (ES2022) |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Métodos modernos de strings](2-practicas/lab-01-string-methods/README.md) | 50 min |
| [Lab 02 - Tagged templates](2-practicas/lab-02-template-tags/README.md) | 50 min |
| [Lab 03 - Fundamentos de RegExp](2-practicas/lab-03-regexp-basics/README.md) | 55 min |
| [Lab 04 - `matchAll()` y búsqueda avanzada](2-practicas/lab-04-matchall-search/README.md) | 55 min |

### 3. Proyecto (2 h)

[Registro de fichas](3-proyecto/README.md): completas las siete funciones puras de `src/logic.js` (limpiar texto, formar y validar códigos, validar correos, convertir fechas, extraer `#etiquetas` y escapar HTML con una función tag) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 06` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 12/12 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-06-strings_regexp_modernos/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-string-methods/
|   |-- lab-02-template-tags/
|   |-- lab-03-regexp-basics/
|   `-- lab-04-matchall-search/
|-- 3-proyecto/
|   |-- README.md
|   `-- starter/               # index.html, styles.css, src/data.js, src/logic.js, src/main.js
|-- 4-recursos/
|   |-- ebooks-free/README.md
|   |-- videografia/README.md
|   `-- webgrafia/README.md
`-- 5-glosario/
    `-- README.md
```

---

## Versiones de la semana

Node para ejecutar los labs y comprobar el proyecto; `pnpm dlx serve` para abrir el proyecto en el navegador. Las salidas de este material se obtuvieron con Node 24.19.0. Las versiones de todo el curso están en [stack-versions](../../docs/stack-versions.md).

---

## Navegación

| ← Semana anterior | Siguiente → |
|---|---|
| [Semana 05 - Arrays Avanzados](../week-05-arrays_avanzados/README.md) | [Semana 07 - Sets y Maps](../week-07-sets_maps/README.md) |
