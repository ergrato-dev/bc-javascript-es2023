# Semana 11 - Manejo de Errores Moderno

## Objetivos de aprendizaje

Al terminar la semana podrás:

- Capturar errores con `try`/`catch`/`finally`, usar el *optional catch binding* (`catch { }`) y reconocer los errores nativos de JavaScript.
- Crear clases de error propias que heredan de `Error`, con datos útiles (`code`, `field`, `status`) y una jerarquía que se distingue con `instanceof`.
- Relanzar un error con contexto sin perder el original gracias a `cause` (ES2022).
- Manejar los errores de promesas y de `async`/`await`, y elegir entre `Promise.all()` y `Promise.allSettled()`.
- Aplicar patrones de recuperación: valor de respaldo, reintentos, *error boundaries* por elemento y mensajes para el usuario separados del error técnico.

## Requisitos previos

- La [semana 03](../week-03-clases_programacion_orientada_objetos/README.md) (clases, `extends`, `super` y getters) y la [semana 10](../week-10-proxies_reflect/README.md). Las promesas se ven a fondo en la semana 13; aquí solo se usan `async`/`await` y `.catch()` sobre promesas ya hechas, y el [lab 03](2-practicas/lab-03-async-errors/README.md) explica lo necesario.
- Node y pnpm en las versiones de [docs/stack-versions.md](../../docs/stack-versions.md):

  ```bash
  node --version
  # v24.19.0 (o superior)
  pnpm --version
  # 12.21.0 (o superior)
  ```

---

## Contenidos

### 1. Teoría (2 h)

| Archivo | Tiempo | Tema |
|---|---|---|
| [01 - try...catch...finally](1-teoria/01-try-catch-finally.md) | 25 min | Bloques, errores nativos, `throw`, *optional catch binding* y `cause` |
| [02 - Errores personalizados](1-teoria/02-errores-personalizados.md) | 25 min | Clases que heredan de `Error`, códigos y jerarquías |
| [03 - Error boundaries](1-teoria/03-error-boundaries.md) | 20 min | Aislar fallos para que no tumben la aplicación |
| [04 - Errores asíncronos](1-teoria/04-errores-asincronos.md) | 25 min | Promesas, `async`/`await`, `Promise.allSettled()` y timeouts |
| [05 - Mejores prácticas](1-teoria/05-mejores-practicas.md) | 25 min | Qué capturar, qué relanzar y qué mostrar al usuario |

### 2. Prácticas (3 h 30 min)

| Lab | Tiempo |
|---|---|
| [Lab 01 - try...catch...finally](2-practicas/lab-01-try-catch/README.md) | 50 min |
| [Lab 02 - Errores personalizados](2-practicas/lab-02-custom-errors/README.md) | 55 min |
| [Lab 03 - Errores asíncronos](2-practicas/lab-03-async-errors/README.md) | 55 min |
| [Lab 04 - Patrones de manejo de errores](2-practicas/lab-04-error-patterns/README.md) | 50 min |

### 3. Proyecto (2 h)

[Importador de fichas](3-proyecto/README.md): completas las clases de error y las funciones de `src/logic.js` (validar cada pieza de un JSON sin que una mala detenga el resto, encadenar el error original con `cause`, reintentar los fallos pasajeros del servidor y traducir cada error a un mensaje para el usuario) y adaptas `src/data.js` al dominio que te asigna el instructor. `scripts/verificar-semana.sh 11` comprueba las funciones.

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
week-11-manejo_errores_moderno/
|-- README.md
|-- rubrica-evaluacion.md
|-- checks.json
|-- 0-assets/                  # 5 diagramas SVG
|-- 1-teoria/                  # 01 a 05
|-- 2-practicas/
|   |-- README.md
|   |-- lab-01-try-catch/
|   |-- lab-02-custom-errors/
|   |-- lab-03-async-errors/
|   `-- lab-04-error-patterns/
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
| [Semana 10 - Proxies y Reflect](../week-10-proxies_reflect/README.md) | [Semana 12 - Proyecto Integrador - Fundamentos](../week-12-proyecto_integrador_fundamentos/README.md) |
