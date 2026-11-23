# 📏 Cuotas, errores y caducidad

## 🎯 Objetivos

- Comprobar que el almacenamiento se puede usar antes de depender de él.
- Saber cuánto cabe en Web Storage y medir lo que ocupan tus datos.
- Capturar `QuotaExceededError` y devolver un resultado en lugar de romper la página.
- Hacer que un dato caduque guardando su hora de caducidad.
- Consultar la cuota del origen con `navigator.storage` y saber cuándo puede borrar datos el navegador.

El almacenamiento del navegador no es un disco tuyo: tiene límites, puede estar bloqueado y el navegador puede vaciarlo. Una página robusta cuenta con eso y sigue funcionando, aunque sea sin guardar.

---

## 📋 Contenido

### 1. Puede no estar disponible

Acceder a `localStorage` o escribir en él puede lanzar un error:

- La persona ha bloqueado los datos de los sitios en la configuración del navegador: el acceso lanza `SecurityError`.
- El almacenamiento está lleno: `setItem` lanza `QuotaExceededError`.
- Algunos modos privados antiguos tenían cuota cero.

La forma fiable de saberlo es probar: escribir una clave, borrarla y capturar cualquier error. Recibir el almacenamiento con una función permite capturar también el error del acceso:

```javascript
const canUse = (getStorage) => {
  try {
    const storage = getStorage();
    storage.setItem('lab19:probe', 'probe');
    storage.removeItem('lab19:probe');
    return true;
  } catch {
    return false;
  }
};
canUse(() => localStorage);
```

Si devuelve `false`, la página puede seguir con un objeto en memoria que tenga los mismos métodos (`getItem`, `setItem`, `removeItem`) y avisar de que los cambios se perderán al cerrar. Es lo que hace `main.js` en el proyecto.

### 2. Cuánto cabe

Cada navegador pone su límite a Web Storage, por origen y aparte para `localStorage` y `sessionStorage`. En el lab 04, Chromium admite unos 5 Mi caracteres (algo menos de 5 millones de letras) antes de lanzar el error:

```text
QuotaExceededError · ¿es de cuota? true
Cupieron 4.75 Mi caracteres de relleno
```

Cuentan la clave y el valor. JavaScript guarda el texto en UTF-16, así que lo que ocupa se mide en caracteres, no en bytes UTF-8: `'🐙'.length` vale `2`. Para medir lo tuyo, suma `key.length + valor.length` de tus claves.

IndexedDB comparte con la caché y otros almacenes una cuota mucho mayor, que depende del espacio libre del disco.

### 3. Capturar `QuotaExceededError`

El error es un `DOMException` con `name` igual a `'QuotaExceededError'`. Comprueba el `name`, no el mensaje: el texto cambia de un navegador a otro. Un guardado que no rompe la página devuelve un resultado y relanza los errores que no sabe tratar:

```javascript
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return { ok: true };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'QuotaExceededError') return { ok: false, reason: 'quota' };
    throw error;
  }
};
```

```text
Con el almacenamiento lleno: {"ok":false,"reason":"quota"}
Tras liberar espacio: {"ok":true}
```

Cuando falla, el valor anterior de la clave sigue intacto. Con `{ ok: false }`, la página decide qué hacer: avisar, borrar datos viejos de una caché y reintentar, o seguir solo en memoria.

### 4. Datos que caducan

Web Storage no borra nada por su cuenta. Si un dato solo vale un rato (un borrador, un horario del día, una respuesta de una API guardada como caché), guarda junto a él cuándo caduca y compruébalo al leer:

```javascript
const setWithExpiry = (key, value, ttl, now) =>
  localStorage.setItem(key, JSON.stringify({ value, expiresAt: now + ttl }));
```

Al leer, si `now >= expiresAt`, borra la clave y devuelve `null`. Recibir la hora (`now`) como parámetro, en lugar de llamar a `Date.now()` dentro, permite probar la función con horas fijas: así lo hacen el lab y las comprobaciones del proyecto.

### 5. `navigator.storage`

`navigator.storage.estimate()` devuelve una promesa con la cuota del origen y lo que se usa (en bytes). En Chromium, `usage` no cuenta Web Storage, solo IndexedDB, la caché y otros almacenes:

```text
Cuota del origen: 10.0 GiB · en uso: 0 bytes
¿Persistente? false
```

La cuota depende del disco de cada equipo: la tuya será distinta. Si el disco se llena, el navegador puede borrar los datos de los orígenes que menos se usan. `navigator.storage.persist()` pide que no borre los de tu página; el navegador decide si lo concede, y `persisted()` dice si ya lo hizo.

### 6. Resumen de estrategias

| Problema | Estrategia |
|---|---|
| Almacenamiento bloqueado | Comprobar antes y seguir en memoria |
| Lleno | Capturar `QuotaExceededError`, avisar y liberar lo que sobre |
| Datos viejos o rotos | Validar al leer, versionar y migrar ([teoría 02](02-serializacion.md)) |
| Datos que caducan | Guardar `expiresAt` y comprobarlo al leer |
| Claves de otros | Prefijo y borrar solo las tuyas ([teoría 01](01-web-storage.md)) |

---

## 🧪 Pruébalo

El [lab 04](../2-practicas/lab-04-cuotas-y-errores/README.md) comprueba si el almacenamiento está disponible, mide tus claves, llena `localStorage` hasta el error, guarda con un resultado, hace caducar un horario y consulta la cuota del origen.

## ✅ Checklist de aprendizaje

- [ ] Compruebo que el almacenamiento funciona antes de usarlo y tengo un plan si no.
- [ ] Sé cuánto cabe en Web Storage y mido lo que ocupan mis claves.
- [ ] Capturo `QuotaExceededError` por su `name` y devuelvo un resultado.
- [ ] Guardo datos con caducidad y los compruebo con una hora que recibo como parámetro.
- [ ] Consulto `navigator.storage.estimate()` y sé qué hace `persist()`.

<!-- nav -->
---

## 🔗 Navegación

| Anterior | Siguiente |
|---|---|
| ← [Teoría — 🗃️ IndexedDB](03-indexeddb.md) | [Índice de labs](../2-practicas/README.md) → |

[↑ Semana 19](../README.md)
