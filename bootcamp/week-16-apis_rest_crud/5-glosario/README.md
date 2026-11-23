# 📖 Glosario - Semana 16: APIs REST y CRUD

Términos clave de esta semana ordenados alfabéticamente.

---

## A

### Actualización optimista
Cambiar la interfaz antes de que responda la API, como si la petición fuera a salir bien, y deshacer el cambio si falla. Lo contrario es la actualización pesimista, que espera la respuesta. Ver [teoría 04](../1-teoria/04-estados-carga.md).

### Autenticación
Comprobar quién hace la petición. Si falla, la API responde `401`.

### Autorización
Comprobar si quien hace la petición puede hacer esa acción. Si falla, la API responde `403`.

### Authorization (cabecera)
Cabecera HTTP que lleva la credencial de la petición. Con un token: `Authorization: Bearer <token>`.

## B

### Bearer
Esquema de autenticación en el que quien porta el token tiene acceso. El formato es exacto: la palabra `Bearer`, un espacio y el token.

## C

### Clave de idempotencia
Cabecera (a menudo `Idempotency-Key`) con un id único que permite reintentar un `POST` sin crear el recurso dos veces, si la API la admite.

### Colección
Recurso que agrupa elementos del mismo tipo, como `/species`. `GET` la lista y `POST` crea un elemento en ella.

### Condición de carrera
Error en el que el resultado depende de qué operación termina antes. En un buscador, una respuesta lenta que llega después de otra más nueva y la sobrescribe.

### CRUD
*Create, Read, Update, Delete*: las cuatro operaciones básicas sobre un recurso, que en REST son `POST`, `GET`, `PUT`/`PATCH` y `DELETE`.

### Cursor
Marca opaca que devuelve la API (`nextCursor`) para pedir la página siguiente desde un elemento concreto. `null` indica que no hay más.

## D

### Debounce
Esperar a que pase un tiempo sin cambios (por ejemplo, 300 ms sin teclear) antes de lanzar una acción, para no hacer una petición por tecla.

## E

### Elemento
Un recurso concreto de una colección, identificado por su id en la ruta: `/species/13`.

### Envelope (sobre)
Respuesta que envuelve los datos con información extra: `{ data, meta }`, donde `meta` trae la página, el tamaño y el total.

## I

### Idempotente
Método cuya repetición deja el servidor igual que hacerlo una vez: `GET`, `PUT` y `DELETE`. `POST` no lo es. La respuesta puede cambiar (`204` y después `404`); el estado del servidor, no.

## J

### JWT (JSON Web Token)
Token con tres partes en Base64URL separadas por puntos: cabecera, datos y firma. Los datos se leen sin clave, así que nunca llevan secretos.

## L

### Link (cabecera)
Cabecera con las URL relacionadas con la respuesta, como la página anterior y la siguiente: `</species?page=3>; rel="next"`.

### Location (cabecera)
Cabecera de una respuesta `201` con la URL del recurso creado.

## O

### Offset
Cuántos elementos se salta una página: `(page - 1) * perPage`.

## P

### Paginación
Devolver una colección por partes de tamaño fijo. Por número de página (`page`, `perPage`) o por cursor.

### Problem Details
Formato estándar (RFC 9457) para el cuerpo de los errores, con el tipo `application/problem+json`.

## R

### Recurso
Cualquier cosa que ofrece una API con su propia URL: una colección, un elemento o un recurso anidado como `/habitats/1/species`.

### Reductor
Función pura `(estado, evento) => estadoNuevo` que concentra todos los cambios de estado y no modifica el estado que recibe.

### REST
Estilo de diseño de APIs sobre HTTP: recursos con URL, métodos con significado fijo y peticiones sin estado.

## S

### Seguro (método)
Método que no cambia nada en el servidor: `GET` y `HEAD`.

### Stateless (sin estado)
El servidor no recuerda las peticiones anteriores: cada una trae todo lo necesario, también el token.

## T

### Token
Credencial temporal que da la API al iniciar sesión y que el cliente envía en cada petición. Caduca y se puede invalidar con un cierre de sesión.

## X

### XSS (Cross-Site Scripting)
Ataque que consigue ejecutar JavaScript ajeno en una página. Ese código puede leer lo que haya en `localStorage`, por ejemplo un token.

## Números

### 409 Conflict
Datos válidos que chocan con el estado del servidor, como un nombre repetido.

### 422 Unprocessable Content
Datos que no cumplen las reglas de la API. El cuerpo suele traer los errores por campo.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Recursos — web](../4-recursos/webgrafia/README.md) | [🧱 Semana 17: DOM Manipulation Moderna](../../week-17-dom_manipulation_moderna/README.md) → |

[↑ Semana 16](../README.md)
