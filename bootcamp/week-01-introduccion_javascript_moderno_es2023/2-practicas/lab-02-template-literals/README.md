# Lab 02 — Template literals

## Objetivo

Construir textos con template literals: interpolar variables y expresiones con `${}`, escribir textos de varias líneas y generar HTML y URLs a partir de datos.

**Tiempo:** 40 min · **Teoría:** [03 - Template literals](../../1-teoria/03-template-literals.md)

## Cómo trabajar

El archivo [`starter/index.js`](starter/index.js) tiene 8 pasos. En cada uno, descomenta el bloque que hay debajo de `Descomenta las siguientes líneas:` (selecciónalo y pulsa `Ctrl+/`, o `Cmd+/` en macOS) y ejecuta:

```bash
cd bootcamp/week-01-introduccion_javascript_moderno_es2023/2-practicas/lab-02-template-literals
node starter/index.js
```

Las salidas de este README se obtuvieron con Node 24. Los pasos que aún no descomentaste solo imprimen su título.

---

## Paso 1: sintaxis básica

Un template literal se escribe entre backticks (`` ` ``), la tecla que en el teclado español está a la derecha de la `P`. Dentro puedes usar comillas simples y dobles sin escaparlas.

```text
--- Paso 1: Sintaxis Básica ---
Template simple: Hola mundo
Con comillas: Ella dijo "Hola" y él respondió 'Adiós'
```

## Paso 2: interpolación

`${variable}` inserta el valor de la variable dentro del texto. El paso construye la misma frase con `+` y con template literal para que compares cómo se leen.

```text
--- Paso 2: Interpolación ---
Concatenación: Hola, soy Ana y tengo 25 años.
Template literal: Hola, soy Ana y tengo 25 años.
Perfil: Nombre: Ana, Edad: 25, Ciudad: Madrid
```

## Paso 3: expresiones

Entre `${` y `}` cabe cualquier expresión: una operación (`price * quantity`), una llamada a método (`toFixed(2)` redondea a 2 decimales, `toUpperCase()` pasa a mayúsculas). Fíjate en `$${...}`: el primer `$` es texto, el segundo abre la interpolación.

```text
--- Paso 3: Expresiones ---
Subtotal: $300
Total con IVA: $363.00
Tienes 3 items en el carrito
¡ANA!
```

## Paso 4: textos de varias líneas

Los saltos de línea que escribes dentro de los backticks forman parte del texto, sin `\n`. La fecha y la hora salen de `new Date()`, así que en tu equipo verás las tuyas, y su formato depende del idioma del sistema:

```text
--- Paso 4: Strings Multilínea ---
Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!
---

================================
¡Bienvenido, Carlos!
================================
Fecha: 11/19/2026
Hora: 9:30:08 PM
```

## Paso 5: HTML dinámico

El uso más habitual en el navegador: generar un trozo de HTML con los datos de un objeto. El operador ternario (`condición ? a : b`) elige entre dos textos según `user.active`.

```text
--- Paso 5: HTML Dinámico ---
HTML generado: 
<div class="user-card">
  <h3>María López</h3>
  <p>Email: maria@example.com</p>
  <p>Role: Developer</p>
  <span class="active">
    ✅ Activo
  </span>
</div>
```

## Paso 6: URLs dinámicas

Las URLs se arman uniendo base, ruta e identificador. Un template literal deja ver la forma final de la URL de un vistazo.

```text
--- Paso 6: URLs Dinámicas ---
URL base: https://api.example.com/v2/users
URL de usuario: https://api.example.com/v2/users/42
URL completa: https://api.example.com/v2/users/42?include=profile&format=json
```

## Paso 7: escapar caracteres

Para escribir un backtick o `${` como texto, antepón una barra invertida: `` \` `` y `\${`. En la última línea, `${2 + 2}` sí se evalúa porque no lleva barra.

```text
--- Paso 7: Escapar Caracteres ---
Para crear un template literal, usa `backticks`
El precio es ${precio} (sin interpolar)
Código: `const x = 4`
```

## Paso 8: caso práctico

Una lista de notificaciones convertida en dos salidas: una línea de texto por notificación con `forEach`, y una lista HTML con `map` y `join('\n')`. Verás `forEach` y `map` en detalle en el [lab 03](../lab-03-arrow-functions/README.md); aquí basta con saber que recorren la lista.

```text
--- Paso 8: Caso Práctico ---
✅ [SUCCESS] Guardado correctamente
❌ [ERROR] Error de conexión
⚠️ [WARNING] Sesión por expirar

Lista HTML:
<ul>
<li class="success">✅ Guardado correctamente</li>
<li class="error">❌ Error de conexión</li>
<li class="warning">⚠️ Sesión por expirar</li>
</ul>

🎉 ¡Excelente! Has dominado los template literals.
Úsalos siempre en lugar de concatenación con +.
```

---

## Comprobación

- [ ] Los 8 pasos descomentados y `node starter/index.js` termina sin errores.
- [ ] Sabes por qué el paso 3 escribe `$${`.
- [ ] Sabes cómo escribir un backtick dentro de un template literal.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Lab 01 — Variables con `const` y `let`](../lab-01-variables-const-let/README.md) | [Lab 03 — Arrow functions](../lab-03-arrow-functions/README.md) → |

[↑ Semana 01](../../README.md)
