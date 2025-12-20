# 💻 Ejercicios Prácticos - Week 05

Bienvenido a los ejercicios prácticos de la semana. Cada ejercicio está diseñado para consolidar los conceptos teóricos a través de la práctica hands-on.

## 📊 Estructura de Ejercicios

### Ejercicio 1: Flat y FlatMap
**Carpeta**: [ejercicio-01-flat-flatmap/](ejercicio-01-flat-flatmap/)  
**Duración**: ~30 minutos  
**Nivel**: ⭐ Básico

Trabajarás con arrays anidados, aprenderás a usar `flat()` con diferentes profundidades y explorarás cómo `flatMap()` combina transformación con aplanamiento.

**Temas:**
- Uso de `flat()` en arrays anidados
- Parámetro de profundidad
- Método `flatMap()` para transformación
- Manejo de valores vacíos y null

---

### Ejercicio 2: Array.from() y Conversiones
**Carpeta**: [ejercicio-02-array-conversiones/](ejercicio-02-array-conversiones/)  
**Duración**: ~40 minutos  
**Nivel**: ⭐⭐ Intermedio

Convertirás objects array-like en arrays reales, trabajarás con NodeList del DOM, y aprenderás a usar `Array.of()` de forma segura.

**Temas:**
- Convertir NodeList a array
- Array.from() con función de mapeo
- Array.of() vs constructor Array()
- Crear ranges con Array.from()

---

### Ejercicio 3: Sort Personalizado
**Carpeta**: [ejercicio-03-sort-personalizado/](ejercicio-03-sort-personalizado/)  
**Duración**: ~45 minutos  
**Nivel**: ⭐⭐ Intermedio

Dominarás la función comparadora, ordenarás números correctamente, trabajarás con objetos complejos y implementarás ordenamiento multi-criterio.

**Temas:**
- Sort numérico vs lexicográfico
- Función comparadora
- Ordenamiento de objetos
- Múltiples criterios
- Mutabilidad de sort()

---

### Ejercicio 4: Chaining Avanzado
**Carpeta**: [ejercicio-04-chaining-avanzado/](ejercicio-04-chaining-avanzado/)  
**Duración**: ~1 hora  
**Nivel**: ⭐⭐⭐ Avanzado

Crearás chains complejos de 4+ métodos encadenados, resolverás problemas del mundo real y aprenderás a debuggear transformaciones complejas.

**Temas:**
- Chaining de múltiples métodos
- Legibilidad vs performance
- Debugging de chains
- Patrones prácticos

---

## 🎯 Cómo Usar Esta Sección

### Estructura de Cada Ejercicio

Cada ejercicio tiene la siguiente estructura:

```
ejercicio-XX-nombre/
├── README.md          # Instrucciones detalladas
├── starter/
│   └── index.js       # Código inicial para completar
└── solution/
    └── index.js       # Solución completa
```

### Pasos Recomendados

1. **Lee las instrucciones** en el README del ejercicio
2. **Abre el archivo starter** (`starter/index.js`)
3. **Implementa la solución** completando las funciones
4. **Prueba tu código** en la terminal o navegador
5. **Compara con la solución** (`solution/index.js`)
6. **Aprende de las diferencias** y ajusta tu enfoque

### Ejecutar los Ejercicios

Cada ejercicio está diseñado para correr en Node.js:

```bash
# Posicionarte en el directorio del ejercicio
cd ejercicio-01-flat-flatmap/starter

# Ejecutar el código
node index.js

# O usar nodemon para reiniciar automáticamente
nodemon index.js
```

---

## 📋 Requisitos Para Esta Sección

Antes de comenzar, asegúrate de tener:

- ✅ Node.js instalado (v16 o superior)
- ✅ VS Code con extensión Code Runner (opcional pero recomendado)
- ✅ Terminal/CLI familiarizada
- ✅ Conocimiento de conceptos de Week 01-04

---

## 💡 Tips Generales

### Debugging Efectivo

```javascript
// Usar console.table() para visualizar arrays de objetos
console.table(datos);

// Usar console.log() con etiquetas
console.log('📍 Punto de verificación:', variable);

// Usar destructuring para debugging
const { property } = object;
console.log('Property:', property);
```

### Mejores Prácticas

- 🔹 Escribe código limpio y comentado
- 🔹 Prueba con diferentes tipos de datos
- 🔹 Maneja casos edge (arrays vacíos, null, undefined)
- 🔹 Usa nombres descriptivos para variables
- 🔹 Evita copy-paste: escribe desde cero

### Si Te Atascas

1. **Relée la teoría** correspondiente
2. **Revisa los ejemplos** en el archivo teórico
3. **Prueba en pequeños pasos** (divide el problema)
4. **Consulta MDN** para métodos específicos
5. **Compara con la solución** (pero intenta primero)

---

## 📊 Progreso

Marca tu progreso aquí:

- [ ] Ejercicio 1: Flat y FlatMap
- [ ] Ejercicio 2: Array.from() y Conversiones
- [ ] Ejercicio 3: Sort Personalizado
- [ ] Ejercicio 4: Chaining Avanzado

**Meta**: Completar todos los 4 ejercicios antes de pasar al proyecto

---

## 🎓 Evaluación de Ejercicios

Cada ejercicio se evalúa en:

| Criterio | Peso |
|----------|------|
| **Funcionalidad** | 50% |
| **Código Limpio** | 30% |
| **Manejo de Casos Edge** | 20% |

**Mínimo de aprobación**: 70%

---

## 🔗 Enlaces Rápidos

- [← Volver a Teoría](../1-teoria/)
- [→ Ir al Proyecto](../3-proyecto/)
- [↑ Volver a Week 05](../README.md)

---

¡Adelante! Los ejercicios son donde la magia sucede. 🚀
