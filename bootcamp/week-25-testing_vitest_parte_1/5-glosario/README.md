# 📖 Glosario - Semana 25: Testing con Vitest - Parte 1

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### afterEach / afterAll
Funciones que Vitest ejecuta después de cada test (`afterEach`) o una vez después del último (`afterAll`). Deshacen lo que el test cambió fuera de él.

### AssertionError
Error que lanza una comprobación que no se cumple, tanto en `node:assert` como en `expect`. Su mensaje dice qué valor salió y cuál se esperaba.

## B

### beforeEach / beforeAll
Funciones que Vitest ejecuta antes de cada test (`beforeEach`) o una vez antes del primero (`beforeAll`). `beforeEach` da a cada test un estado nuevo para que no dependa de los demás.

## C

### Caso límite
Dato en el borde de lo que una función acepta: vacío, justo en un límite, fuera de rango, `NaN`, el tipo equivocado. Es donde suelen esconderse los errores.

### Cobertura
Porcentaje del código que se ejecutó al menos una vez durante los tests. Se mide en sentencias, ramas, funciones y líneas. Dice qué se ejecutó, no qué se comprobó.

## D

### describe
Función de Vitest que agrupa tests bajo un nombre, normalmente el de la función que se prueba. Se puede anidar.

### devDependencies
Dependencias que solo hacen falta para desarrollar, como Vitest. Se instalan con `pnpm add -D`.

## E

### expect
Función de Vitest que envuelve el valor que se comprueba. Detrás va un matcher: `expect(valor).toBe(5)`.

## I

### it / test
Función de Vitest que define un test: un nombre y una función. `test` es otro nombre para lo mismo.

### it.each
Crea un test por cada fila de una tabla de datos, con el mismo código.

## M

### Matcher
Método que va detrás de `expect` y dice qué debe cumplir el valor: `toBe`, `toEqual`, `toThrow`...

### Modo watch
Modo de Vitest (`pnpm vitest`) que se queda esperando y repite los tests cada vez que guardas un archivo.

### Mutante
Versión del código con un error introducido a propósito, como `<` en lugar de `<=`. Si algún test falla, el mutante «muere»; si todos pasan, los tests no protegen ese comportamiento.

## P

### pnpm-lock.yaml
Archivo que guarda la versión exacta de cada paquete instalado, también de las dependencias de las dependencias. Se sube a git para que `pnpm install` instale lo mismo en cualquier equipo.

### Preparar, actuar y comprobar
Las tres partes de un test, en inglés *Arrange, Act, Assert*: crear el estado de partida, hacer una sola llamada y comprobar el resultado.

## R

### Rama
Cada camino posible de un `if`/`else`, un `? :`, un `&&`, un `||` o un `??`. La cobertura de ramas es la medida que más dice.

### Regresión
Error en algo que antes funcionaba, causado por un cambio en otra parte. Los tests automáticos las detectan en cuanto aparecen.

## T

### Test unitario
Test de una función o un módulo por separado. Los de integración prueban varias piezas juntas, y los de extremo a extremo, la aplicación entera.

### Umbral de cobertura
Cobertura mínima (`thresholds`) por debajo de la cual `vitest run --coverage` falla aunque todos los tests pasen.

## V

### Versión exacta
Versión de una dependencia sin `^` ni `~` (`"5.1.0"`), que se escribe con `--save-exact`. Evita que otra instalación traiga una versión distinta.

### Vitest
Framework de tests para JavaScript. Entiende los módulos ES sin configurar nada y usa la misma forma de escribir tests que Jest.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | — |

[↑ Semana 25](../README.md)
