// Un informe de texto con una línea por nota. Ningún test lo importa todavía.
import { toGrade } from './grades.js';

export const formatReport = (scores) => scores.map((score) => `${score}: ${toGrade(score)}`).join('\n');
