// ============================================
// PRÁCTICA 03: classList API (SOLUCIÓN)
// ============================================

const uiElement = {
  classSet: new Set(['is-idle'])
};

const classList = {
  add: (...classNames) => classNames.forEach(className => uiElement.classSet.add(className)),
  remove: (...classNames) => classNames.forEach(className => uiElement.classSet.delete(className)),
  toggle: className => {
    if (uiElement.classSet.has(className)) {
      uiElement.classSet.delete(className);
      return false;
    }
    uiElement.classSet.add(className);
    return true;
  },
  contains: className => uiElement.classSet.has(className)
};

console.log('--- Paso 1: add/remove ---');
classList.add('is-loading');
classList.remove('is-idle');
console.log('Clases:', [...uiElement.classSet]);

console.log('');
console.log('--- Paso 2: toggle ---');
classList.toggle('is-active');
console.log('Tras toggle ON:', [...uiElement.classSet]);
classList.toggle('is-active');
console.log('Tras toggle OFF:', [...uiElement.classSet]);

console.log('');
console.log('--- Paso 3: contains ---');
console.log('¿is-loading?', classList.contains('is-loading'));
console.log('¿is-error?', classList.contains('is-error'));

console.log('');
console.log('--- Paso 4: setStatus centralizado ---');
const setStatus = status => {
  classList.remove('is-idle', 'is-loading', 'is-success', 'is-error');
  classList.add(`is-${status}`);
};

setStatus('success');
console.log('Estado final:', [...uiElement.classSet]);

console.log('');
console.log('=== Fin de la práctica ===');
