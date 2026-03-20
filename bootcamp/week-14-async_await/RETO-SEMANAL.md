# 🏆 Reto Semanal - Semana 14

## 🎯 Reto: Data Race Simulator

### Descripción

Crea un simulador de "carrera de datos" donde múltiples fuentes de datos compiten por entregar información. Usa `Promise.race()` con `async/await` para determinar qué fuente responde primero.

### Requisitos

1. **Simular 3+ fuentes de datos** con latencias aleatorias
2. **Usar `Promise.race()`** con sintaxis async/await
3. **Mostrar en UI** qué fuente ganó y en cuánto tiempo
4. **Implementar timeout** como competidor adicional
5. **Permitir reiniciar** la carrera

### Ejemplo de Implementación

```javascript
// Simulador de fuentes de datos
const createDataSource = (name, minLatency, maxLatency) => {
  return async () => {
    const latency = Math.random() * (maxLatency - minLatency) + minLatency;
    await sleep(latency);
    return { source: name, latency: Math.round(latency), data: `Datos de ${name}` };
  };
};

// Carrera de datos
const runDataRace = async () => {
  const sources = [
    createDataSource('API Principal', 500, 2000),
    createDataSource('API Respaldo', 800, 2500),
    createDataSource('Caché Local', 100, 500),
    createTimeout(3000) // Timeout como competidor
  ];

  try {
    const winner = await Promise.race(sources.map(fn => fn()));
    return { success: true, winner };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

### Puntos Extra

- ⭐ Mostrar el progreso de todas las fuentes
- ⭐ Estadísticas de victorias por fuente
- ⭐ Modo "best of 5" (mejor de 5 carreras)

---

## 📌 Nota

Este reto es **opcional** y complementa el proyecto semanal. No es un entregable obligatorio pero demuestra dominio avanzado de los conceptos.

---

[⬅️ Volver a Semana 14](README.md)
