// Notas de 0 a 10 y su calificación.

// La calificación de una nota. Lanza un RangeError si no es un número de 0 a 10.
export const toGrade = (score) => {
  if (typeof score !== 'number' || score < 0 || score > 10) throw new RangeError('La nota va de 0 a 10');
  if (score >= 9) return 'Sobresaliente';
  if (score >= 7) return 'Notable';
  if (score >= 5) return 'Aprobado';
  return 'Suspenso';
};

// La media de las notas, o null si no hay ninguna.
export const average = (scores) => (scores.length === 0 ? null : scores.reduce((sum, score) => sum + score, 0) / scores.length);
