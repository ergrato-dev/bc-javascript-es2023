// Datos de la agenda. Cámbialos por los de tu dominio (paso 2 del README).
// date es 'AAAA-MM-DD', time es 'HH:mm' en hora local y minutes, la duración en minutos.

export const APP = {
  title: 'Agenda del planetario',
  intro: 'Sesiones de cúpula, charlas y noches de observación de los próximos meses.',
  locale: 'es-CO',
  zones: ['Europe/Madrid', 'America/Mexico_City'],
};

export const EVENTS = [
  { id: 'constelaciones', title: 'Constelaciones de marzo', date: '2026-03-05', time: '18:00', minutes: 60, place: 'Cúpula' },
  { id: 'cuentos', title: 'Cuentos bajo la cúpula', date: '2026-03-27', time: '11:00', minutes: 45, place: 'Cúpula' },
  { id: 'noche', title: 'Noche de estrellas', date: '2026-03-27', time: '19:30', minutes: 90, place: 'Cúpula' },
  { id: 'luna', title: 'La Luna de cerca', date: '2026-03-28', time: '10:00', minutes: 60, place: 'Sala de telescopios' },
  { id: 'jupiter', title: 'Observación de Júpiter', date: '2026-03-31', time: '20:00', minutes: 120, place: 'Terraza' },
  { id: 'gigantes', title: 'Planetas gigantes', date: '2026-04-02', time: '18:00', minutes: 60, place: 'Cúpula' },
  { id: 'marte', title: 'Charla: ¿vida en Marte?', date: '2026-04-15', time: '19:00', minutes: 90, place: 'Auditorio' },
  { id: 'lluvia', title: 'Lluvia de estrellas', date: '2026-05-09', time: '21:00', minutes: 120, place: 'Terraza' },
];
