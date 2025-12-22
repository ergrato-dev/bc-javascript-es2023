# 🚀 Proyecto: Paginador con Generadores

## 📋 Descripción

Construye un sistema de paginación que utiliza **generadores** para manejar grandes conjuntos de datos de forma eficiente. El paginador cargará datos de forma "lazy" (bajo demanda), permitiendo navegar por páginas sin cargar todo en memoria.

---

## 🎯 Objetivos de Aprendizaje

- ✅ Aplicar generadores para lazy loading de datos
- ✅ Implementar iterables personalizados
- ✅ Usar `yield` para controlar el flujo de datos
- ✅ Crear una interfaz de paginación interactiva

---

## 🖼️ Vista Previa

```
┌─────────────────────────────────────────────────────────┐
│           📚 PAGINADOR CON GENERADORES                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │  • Item 1 - Descripción del elemento            │   │
│   │  • Item 2 - Descripción del elemento            │   │
│   │  • Item 3 - Descripción del elemento            │   │
│   │  • Item 4 - Descripción del elemento            │   │
│   │  • Item 5 - Descripción del elemento            │   │
│   └─────────────────────────────────────────────────┘   │
│                                                         │
│        [◀ Anterior]  Página 1 de 10  [Siguiente ▶]      │
│                                                         │
│   Items por página: [5 ▼]    Total: 50 items            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Estructura del Proyecto

```
paginador-generadores/
├── index.html          # Estructura HTML
├── styles.css          # Estilos
├── README.md           # Este archivo
├── starter/
│   └── script.js       # Tu código (con TODOs)
└── solution/
    └── script.js       # Solución de referencia
```

---

## 🛠️ Funcionalidades

### Requeridas

1. **Generador de datos**: Simular una fuente de datos grande
2. **Paginación lazy**: Cargar solo la página actual
3. **Navegación**: Botones anterior/siguiente
4. **Indicador de página**: Mostrar página actual y total
5. **Items por página**: Selector para cambiar cantidad

### Opcionales (Bonus)

- Ir a página específica
- Búsqueda/filtrado
- Animaciones de transición
- Persistir preferencias en localStorage

---

## 📝 Instrucciones

### Paso 1: Entender la Estructura

Abre `index.html` en el navegador y familiarízate con la interfaz.

### Paso 2: Implementar el Generador de Datos

```javascript
// El generador produce items bajo demanda
function* dataGenerator(totalItems) {
  for (let i = 1; i <= totalItems; i++) {
    yield {
      id: i,
      title: `Item ${i}`,
      description: `Descripción del elemento ${i}`
    };
  }
}
```

### Paso 3: Crear la Clase Paginator

```javascript
class Paginator {
  constructor(generator, itemsPerPage) {
    // Inicializar propiedades
  }

  *currentPage() {
    // Generador que produce items de la página actual
  }

  next() {
    // Ir a siguiente página
  }

  previous() {
    // Ir a página anterior
  }
}
```

### Paso 4: Conectar con el DOM

Implementa las funciones para renderizar y manejar eventos.

### Paso 5: Probar y Refinar

Verifica que todas las funcionalidades trabajen correctamente.

---

## ✅ Criterios de Evaluación

| Criterio | Puntos |
|----------|--------|
| Generador de datos funcional | 20 |
| Clase Paginator con iteración | 25 |
| Navegación anterior/siguiente | 20 |
| Indicador de página correcto | 15 |
| Selector de items por página | 10 |
| Código limpio y documentado | 10 |
| **Total** | **100** |

---

## 💡 Hints

### Cómo funciona el paginador con generadores

```javascript
// El generador es "lazy" - solo produce valores cuando se piden
function* infiniteData() {
  let id = 1;
  while (true) {
    yield { id: id++, name: `Item ${id}` };
  }
}

// Tomar solo lo que necesitamos para una página
function* take(iterator, n) {
  for (let i = 0; i < n; i++) {
    const { value, done } = iterator.next();
    if (done) return;
    yield value;
  }
}

// Saltar items (para ir a una página específica)
function* skip(iterator, n) {
  for (let i = 0; i < n; i++) {
    const { done } = iterator.next();
    if (done) return;
  }
  yield* iterator;
}
```

### Calcular páginas

```javascript
const totalPages = Math.ceil(totalItems / itemsPerPage);
const currentPageItems = page * itemsPerPage;
```

---

## 🚀 Cómo Empezar

1. Abre `index.html` en tu navegador
2. Abre `starter/script.js` en tu editor
3. Completa cada TODO en orden
4. Prueba cada funcionalidad antes de continuar
5. Compara con `solution/script.js` si necesitas ayuda

---

## 📚 Recursos

- [MDN: Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [JavaScript.info: Generators](https://javascript.info/generators)

---

*Proyecto Week 08 | Bootcamp JavaScript ES6+*
