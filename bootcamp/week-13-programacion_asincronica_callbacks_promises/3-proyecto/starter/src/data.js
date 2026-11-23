// Datos de ejemplo del dominio. Cambia el título y los servicios por los de tu dominio.

export const TITLE = '🔭 Planetario — panel de servicios';

// Los servicios que consulta el panel. Son simulados: nadie se conecta a ningún servidor.
// - name: nombre del servicio, sin repetir.
// - delay: milisegundos que tarda en responder, un entero de 50 a 3000.
// - available: true si responde bien, false si no responde.
// - result: el texto que devuelve cuando responde bien.
export default [
  { name: 'Cartelera de sesiones', delay: 400, available: true, result: '6 sesiones hoy' },
  { name: 'Reservas de cúpula', delay: 900, available: true, result: '23 butacas libres' },
  { name: 'Observatorio remoto', delay: 1500, available: false, result: 'Cielo despejado' },
  { name: 'Tienda de recuerdos', delay: 600, available: true, result: '12 pedidos pendientes' },
  { name: 'Clima espacial', delay: 1200, available: true, result: 'Actividad solar baja' },
];
