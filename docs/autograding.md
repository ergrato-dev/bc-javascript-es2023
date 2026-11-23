# Autograding

`scripts/verificar-semana.sh` te dice qué te falta antes de entregar el proyecto de la semana. No sabe nada de ninguna semana en concreto: lee `bootcamp/week-NN-*/checks.json` y ejecuta lo que ahí ponga.

## Uso

```bash
./scripts/verificar-semana.sh --doctor        # comprueba tu entorno (bash, git, jq, node, pnpm)
PROYECTO=~/js-proyecto-semana-05 ./scripts/verificar-semana.sh 05
                                              # comprueba tu carpeta de proyecto para la S05
./scripts/verificar-semana.sh 05              # comprueba 3-proyecto/starter (debe fallar)
ENTREGA=solution ./scripts/verificar-semana.sh 05
                                              # instructor: valida la solución de referencia
```

Salida:

```
Semana 05 — Arrays Avanzados

  ✅ logic.js es un módulo ES válido
  ❌ groupByCategory agrupa los elementos con Object.groupBy
     pista: 3-proyecto/README.md, paso 3

  1/2 comprobaciones superadas.
```

Sale con 0 si pasan todas y con 1 si falla alguna. Cada pista dice en qué archivo y en qué paso se arregla.

## Estructura del proyecto que se verifica

Los proyectos corren en el navegador, pero el autograding corre en Node. Por eso cada proyecto separa dos capas:

| Archivo | Qué contiene | Quién lo ejecuta |
|---|---|---|
| `src/logic.js` | Funciones puras exportadas con `export`: datos, transformaciones, validaciones. **Sin** `document`, `window` ni `fetch` | Node (checks) y navegador |
| `src/main.js` | DOM y eventos: importa `logic.js` y pinta resultados | Navegador |
| `index.html` | Carga `src/main.js` con `<script type="module">` | Navegador |
| `styles.css` | Estilos | Navegador |

- **Qué:** la lógica de negocio no toca el DOM.
- **Para qué:** se puede importar desde Node y comprobar con valores concretos, sin navegador.
- **Impacto:** es la misma separación que usarás en S25–S26 para escribir tests con Vitest.

Desde S25 el proyecto tiene `package.json` con Vitest. Los checks necesitan `pnpm install` hecho en el proyecto y llaman a `node_modules/.bin/vitest` directamente: `pnpm vitest` comprobaría antes las dependencias y añadiría líneas a la salida.

## Formato de `checks.json`

```json
{
  "semana": "05",
  "titulo": "Arrays Avanzados",
  "checks": [
    {
      "id": "sintaxis",
      "descripcion": "logic.js es un módulo ES válido",
      "cmd": "cd {proyecto} && node --check src/logic.js",
      "assert": "exit0",
      "pista": "3-proyecto/README.md, paso 1"
    },
    {
      "id": "group-by",
      "descripcion": "groupByCategory agrupa los elementos con Object.groupBy",
      "cmd": "cd {proyecto} && node --input-type=module -e \"import assert from 'node:assert/strict'; import { groupByCategory } from './src/logic.js'; const g = groupByCategory([{ category: 'a' }, { category: 'b' }, { category: 'a' }]); assert.equal(g.a.length, 2); assert.equal(g.b.length, 1);\"",
      "assert": "exit0",
      "pista": "3-proyecto/README.md, paso 3"
    }
  ]
}
```

| Campo | Qué es |
|---|---|
| `id` | Identificador corto y único dentro de la semana |
| `descripcion` | Lo que el estudiante ve junto a ✅/❌ |
| `cmd` | Comando bash. Marcadores: `{proyecto}`, `{semana}`, `{raiz}` |
| `assert` | `exit0`, `exit!=0`, `exit=N`, `stdout~RE`, `stdout!~RE` (regex extendida) |
| `pista` | Archivo y paso donde se arregla |

Marcadores:

- `{proyecto}` es `$PROYECTO` si está definido. Si no, es `bootcamp/week-NN-*/3-proyecto/starter`; con `ENTREGA=solution`, la solución de referencia en `$BC_INSTRUCTOR/bc-javascript-es2023/week-NN-*/3-proyecto/solution` (por defecto `BC_INSTRUCTOR=../bc-instructor`, repo privado del instructor).
- `{semana}` es la carpeta de la semana.
- `{raiz}` es la raíz de este repositorio.

## Reglas para escribir checks

- **Cuándo:** el `checks.json` se escribe **antes** que el proyecto. Es la especificación verificable.
- **Contrato:** con el `starter/` falla al menos un check y con la solución de referencia pasan todos. Una semana no está terminada hasta que ambas cosas son ciertas.
- **Una sola cosa por check:** una función, una regla de validación, la ausencia de `TODO`. No se mezclan.
- **Independientes del dominio:** cada aprendiz tiene un dominio distinto, así que los checks prueban la forma (qué devuelve la función con datos dados), nunca nombres de dominio. Los datos de prueba van dentro del propio check.
- **Sintaxis moderna:** cuando la semana enseña una API (`Object.groupBy`, `toSorted`, `structuredClone`...), el check puede buscarla con `grep` además de probar el resultado.
- **Copia visible:** el `3-proyecto/README.md` termina con "✅ Requisitos verificables", una copia legible de los checks.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Versiones del stack](stack-versions.md) | [Índice del bootcamp](../bootcamp/README.md) → |
