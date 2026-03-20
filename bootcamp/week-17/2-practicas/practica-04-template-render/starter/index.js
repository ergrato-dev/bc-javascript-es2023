// ============================================
// PRÁCTICA 04: Template y Render Dinámico
// ============================================

const data = [
  { id: 1, title: 'Elemento A', description: 'Descripción A' },
  { id: 2, title: 'Elemento B', description: 'Descripción B' }
];

// ============================================
// PASO 1: Definir template base
// ============================================
console.log('--- Paso 1: Definir template base ---');

// Descomenta las siguientes líneas:
// const template = {
//   id: 'cardTemplate',
//   structure: { title: '', description: '' }
// };
//
// console.log('Template:', template.id);

console.log('');

// ============================================
// PASO 2: Clonar template
// ============================================
console.log('--- Paso 2: Clonar template ---');

// Descomenta las siguientes líneas:
// const cloneTemplate = () => ({ title: '', description: '' });
// const clone = cloneTemplate();
// console.log('Clone:', clone);

console.log('');

// ============================================
// PASO 3: Mapear datos
// ============================================
console.log('--- Paso 3: Mapear datos ---');

// Descomenta las siguientes líneas:
// const mapDataToClone = item => {
//   const cloned = cloneTemplate();
//   cloned.title = item.title;
//   cloned.description = item.description;
//   return cloned;
// };
//
// console.log('Mapped:', mapDataToClone(data[0]));

console.log('');

// ============================================
// PASO 4: Render de colección
// ============================================
console.log('--- Paso 4: Render de colección ---');

// Descomenta las siguientes líneas:
// const renderCollection = items =>
//   items.map(item => ({ id: item.id, ...mapDataToClone(item) }));
//
// const rendered = renderCollection(data);
// console.log('Render result:', rendered);

console.log('');
console.log('=== Fin de la práctica ===');
