# 📖 Glosario - Semana 17: DOM Manipulation Moderna

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### Atributo
Lo que pone el HTML en una etiqueta: `<input value="Pulpo">`. Se lee con `getAttribute` y se cambia con `setAttribute`. No siempre coincide con la propiedad del mismo nombre.

### aria-pressed
Atributo que dice a un lector de pantalla si un botón que se activa y desactiva está activado (`"true"`) o no (`"false"`).

## C

### classList
Propiedad de un elemento para añadir, quitar, alternar y consultar sus clases de una en una: `add`, `remove`, `toggle`, `contains`, `replace`.

### Clave (render por clave)
Dato estable que identifica a cada elemento de una lista, normalmente su `id`, para reutilizar su nodo entre un render y el siguiente.

### closest
Método que sube desde un elemento, empezando por él mismo, hasta el primer antepasado que encaja con un selector. Devuelve `null` si no hay ninguno.

### Colección viva
Colección que se actualiza sola cuando cambia el documento, como la `HTMLCollection` de `children` o `getElementsByClassName`. La `NodeList` de `querySelectorAll` es estática.

## D

### data-* (atributos)
Atributos para guardar datos propios en el HTML, como `data-id="3"`. Se leen y escriben con `dataset`, y sus valores siempre son texto.

### defer
Atributo de `<script>` que retrasa la ejecución hasta que el navegador ha leído todo el HTML. Los módulos (`type="module"`) se comportan así sin escribirlo.

### DocumentFragment
Contenedor de nodos que no está en la página. Al insertarlo, sus nodos pasan a la página en un solo cambio y el fragmento queda vacío.

### DOM (Document Object Model)
Árbol de objetos que construye el navegador a partir del HTML. JavaScript lo lee y lo cambia, y la página se actualiza.

## E

### Elemento
Nodo que corresponde a una etiqueta HTML (`nodeType` 1). `children` y las propiedades con *Element* en el nombre solo devuelven elementos.

### Escapar
Sustituir los caracteres con significado en HTML (`&`, `<`, `>`, `"`, `'`) por sus entidades (`&amp;`, `&lt;`...), para que un texto se vea tal cual y no se interprete.

## I

### innerHTML
Propiedad que lee o escribe el HTML de dentro de un elemento como texto. Al escribir, el navegador interpreta las etiquetas: nunca se usa con datos ajenos.

## M

### MutationObserver
Objeto que anota los cambios de un elemento (hijos, atributos, texto). En el lab 02 sirve para contar cuántos cambios hace cada forma de insertar.

## N

### Nodo
Cualquier cosa del árbol DOM: un elemento, un texto, un comentario. `childNodes` devuelve todos los nodos hijos, también los textos con espacios.

### NodeList
Colección de nodos que devuelven `querySelectorAll` (estática) y `childNodes` (viva). Tiene `forEach`, pero no `map` ni `filter`.

## P

### Propiedad
Valor actual de un objeto del DOM en JavaScript, como `input.value` o `checkbox.checked`. En los formularios, es lo que ha escrito o marcado quien usa la página.

## R

### Render
Función que pinta la página, o una parte, a partir de los datos. Si los datos cambian, se vuelve a llamar.

### Render por clave
Render que guarda el nodo de cada dato por su clave y en cada llamada solo crea los nuevos, quita los que sobran y mueve los que han cambiado de sitio. Conserva el foco y lo escrito en los nodos reutilizados.

### replaceChildren
Método que sustituye todo el contenido de un elemento por los nodos que recibe, en un solo cambio. Sin argumentos, lo vacía.

## S

### Selector CSS
Texto que describe qué elementos buscar, el mismo de las hojas de estilos: `.tank`, `#list`, `[data-id="2"]`, `section h2`.

## T

### template (elemento)
Etiqueta `<template>` cuyo contenido el navegador lee pero no muestra. Se clona con `template.content.firstElementChild.cloneNode(true)` para crear elementos con la misma estructura.

### textContent
Propiedad que lee o escribe todo el texto de un elemento. Al escribir, los `<` y `>` se ven tal cual: es la forma segura de meter datos en la página.

## X

### XSS (Cross-Site Scripting)
Ataque que consigue ejecutar código ajeno dentro de una página, por ejemplo con un `<img onerror="...">` metido con `innerHTML`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [🖱️ Semana 18: Event Handling Avanzado](../../week-18-event_handling_avanzado/README.md) → |

[↑ Semana 17](../README.md)
