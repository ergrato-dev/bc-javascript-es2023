// ============================================
// PRÁCTICA 02: Creación de Recursos con POST (SOLUCIÓN)
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

const main = async () => {
  console.log('--- Paso 1: Construir payload ---');

  const newItem = {
    title: 'Elemento creado desde práctica',
    body: 'Contenido de ejemplo',
    userId: 7
  };

  console.log('Payload:', newItem);
  console.log('');

  console.log('--- Paso 2: Enviar POST ---');

  const createItem = async payload => {
    const response = await fetch(`${API_BASE}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    return response.json();
  };

  const created = await createItem(newItem);
  console.log('Creado con ID:', created.id);
  console.log('');

  console.log('--- Paso 3: Validar payload ---');

  const validatePayload = payload => {
    if (!payload.title?.trim()) {
      throw new Error('El campo title es obligatorio');
    }

    if (!payload.body?.trim()) {
      throw new Error('El campo body es obligatorio');
    }
  };

  validatePayload(newItem);
  console.log('Payload válido');
  console.log('');

  console.log('--- Paso 4: Función reusable create ---');

  const apiCreate = async (endpoint, payload) => {
    validatePayload(payload);

    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  };

  const item = await apiCreate('/posts', newItem);
  console.log('Resultado reusable:', item.id);

  console.log('');
  console.log('=== Fin de la práctica ===');
};

main().catch(error => {
  console.error('Error en la práctica:', error.message);
});
