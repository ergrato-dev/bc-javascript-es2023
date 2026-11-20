# Semana 10 - Proxies y Reflect

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Crear un `Proxy` a partir de un objeto y un handler, y explicar qué hace un handler vacío.
- Interceptar lecturas, escrituras, el operador `in`, `delete` y la lista de claves con los traps `get`, `set`, `has`, `deleteProperty` y `ownKeys`.
- Usar `Reflect` dentro de los traps para mantener el comportamiento normal, y explicar qué cambia el parámetro `receiver`.
- Validar datos al asignarlos y calcular propiedades al leerlas.
- Avisar de cada cambio de un objeto a quien se suscribe (patrón Observer).

## Requisitos previos

- La [semana 03](../week-03-clases_programacion_orientada_objetos/README.md) (getters y `this`), la [semana 07](../week-07-sets_maps/README.md) (`Map`, `Set` y `Object.fromEntries`) y la [semana 09](../week-09-simbolos_metaprogramacion_basica/README.md) (claves simbólicas y `Reflect.ownKeys`).
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
| [01 - Introducción a Proxy](1-teoria/01-proxy-intro.md) | 25 min | Target, handler y proxy; `Proxy.revocable()` |
| [02 - Traps básicos](1-teoria/02-traps-basicos.md) | 25 min | `get`, `set`, `has`, `deleteProperty`, `ownKeys` y otros |
| [03 - API Reflect](1-teoria/03-reflect-api.md) | 25 min | Los métodos de `Reflect` y el parámetro `receiver` |
| [04 - Validación reactiva](1-teoria/04-validacion-reactiva.md) | 25 min | Validadores y esquemas aplicados en el trap `set` |
| [05 - Patrón Observer con Proxies](1-teoria/05-observadores.md) | 20 min | Suscripciones y propiedades calculadas |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - Proxy básico](2-practicas/lab-01-proxy-basics/README.md) | 50 min |
| [Lab 02 - Traps avanzados](2-practicas/lab-02-traps/README.md) | 55 min |
| [Lab 03 - La API Reflect](2-practicas/lab-03-reflect/README.md) | 50 min |
| [Lab 04 - Validación reactiva](2-practicas/lab-04-reactive-validation/README.md) | 55 min |

### 3. Proyecto (2 h)

[Fichas validadas en vivo](3-proyecto/README.md): completas los validadores y los dos proxies de `src/logic.js` (un borrador de formulario que valida cada campo en el trap `set` y avisa a la página, y un envoltorio de solo lectura para las piezas guardadas) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 10` comprueba las funciones.

### 4. Recursos (30 min)

[Ebooks](4-recursos/ebooks-free/README.md) · [Videos](4-recursos/videografia/README.md) · [Web](4-recursos/webgrafia/README.md) · [Glosario](5-glosario/README.md)

---

## Evaluación

| Evidencia | Peso | Qué se evalúa |
|---|---:|---|
| Conocimiento | 30% | Los conceptos de la teoría, con ejemplos propios |
| Desempeño | 40% | Los cuatro labs ejecutados y sus preguntas de comprobación |
| Producto | 30% | El proyecto: 14/14 comprobaciones y datos del dominio |

Detalle en la [rúbrica](rubrica-evaluacion.md).

---

## Estructura

```text
week-10-proxies_reflect/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-proxy-basics/
|   |-- lab-02-traps/
|   |-- lab-03-reflect/
|   `-- lab-04-reactive-validation/
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
| [Semana 09 - Símbolos y Metaprogramación Básica](../week-09-simbolos_metaprogramacion_basica/README.md) | [Semana 11 - Manejo de Errores Moderno](../week-11-manejo_errores_moderno/README.md) |
