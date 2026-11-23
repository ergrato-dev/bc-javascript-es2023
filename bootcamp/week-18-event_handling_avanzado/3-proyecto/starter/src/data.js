// Datos de ejemplo: los avisos del Planetario. Cámbialos por los de tu dominio (paso 2 del README).
// Cada aviso: id (entero, sin repetir), title, level ('info', 'aviso' o 'urgente'),
// read y pinned (true o false).

export const TITLE = 'Planetario: avisos de la cúpula';

const NOTICES = [
  { id: 1, title: 'Sesión de las 18:00 completa', level: 'info', read: true, pinned: false },
  { id: 2, title: 'Telescopio 2 en mantenimiento hasta el lunes', level: 'aviso', read: false, pinned: true },
  { id: 3, title: 'Eclipse parcial de Luna el jueves a las 21:40', level: 'info', read: false, pinned: false },
  { id: 4, title: 'Cúpula cerrada por limpieza del proyector', level: 'urgente', read: false, pinned: false },
  { id: 5, title: 'Nuevo espectáculo: Viaje a Saturno', level: 'info', read: true, pinned: false },
  { id: 6, title: 'Taller de constelaciones: quedan 4 plazas', level: 'aviso', read: false, pinned: false },
  { id: 7, title: 'Corte de luz programado en la sala B', level: 'urgente', read: true, pinned: true },
  { id: 8, title: 'Charla sobre exoplanetas aplazada', level: 'aviso', read: true, pinned: false },
];

export default NOTICES;
