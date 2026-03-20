// ============================================
// PRÁCTICA 04: DELETE, Auth Headers y Estados (SOLUCIÓN)
// ============================================

const API_BASE = 'https://jsonplaceholder.typicode.com';

const uiState = {
  status: 'idle',
  message: ''
};

const main = async () => {
  console.log('--- Paso 1: DELETE básico ---');

  const deleteItem = async id => {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
      method: 'DELETE'
    });

    return response.status;
  };

  const status = await deleteItem(4);
  console.log('Status DELETE:', status);
  console.log('');

  console.log('--- Paso 2: Authorization header ---');

  const token = 'demo-token-week16';

  const deleteWithAuth = async id => {
    const response = await fetch(`${API_BASE}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });

    return response.status;
  };

  const statusWithAuth = await deleteWithAuth(6);
  console.log('Status con auth:', statusWithAuth);
  console.log('');

  console.log('--- Paso 3: Estado de UI ---');

  const setStatus = (status, message) => {
    uiState.status = status;
    uiState.message = message;
    console.log(`[${status.toUpperCase()}] ${message}`);
  };

  const deleteWithState = async id => {
    setStatus('loading', 'Eliminando recurso...');

    try {
      const response = await fetch(`${API_BASE}/posts/${id}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus('success', `Recurso ${id} eliminado`);
    } catch (error) {
      setStatus('error', `No se pudo eliminar: ${error.message}`);
      throw error;
    }
  };

  await deleteWithState(8);
  console.log('');

  console.log('--- Paso 4: Reintento ante error ---');

  const retry = async (operation, retries = 2) => {
    for (let attempt = 1; attempt <= retries + 1; attempt += 1) {
      try {
        return await operation();
      } catch (error) {
        if (attempt > retries) throw error;
        console.log(`Reintento ${attempt} por error:`, error.message);
      }
    }

    return null;
  };

  await retry(() => deleteWithState(9), 1);

  console.log('');
  console.log('=== Fin de la práctica ===');
};

main().catch(error => {
  console.error('Error en la práctica:', error.message);
});
