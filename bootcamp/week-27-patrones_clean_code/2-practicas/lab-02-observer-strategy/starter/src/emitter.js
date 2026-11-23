// Un emisor de eventos: el patrón Observer en 20 líneas.
// Quien emite no sabe quién escucha; quien escucha no sabe quién emite.
export const createEmitter = () => {
  // Para cada nombre de evento, el conjunto de funciones que lo escuchan.
  const listeners = new Map();

  const on = (name, listener) => {
    if (!listeners.has(name)) listeners.set(name, new Set());
    listeners.get(name).add(listener);
    // Devuelve la función que deja de escuchar.
    return () => listeners.get(name).delete(listener);
  };

  const once = (name, listener) => {
    const off = on(name, (data) => {
      off();
      listener(data);
    });
    return off;
  };

  const emit = (name, data) => {
    for (const listener of listeners.get(name) ?? []) listener(data);
  };

  return { on, once, emit };
};
