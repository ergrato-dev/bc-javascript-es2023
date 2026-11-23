// Página del panel: lee los formularios, llama a las funciones de logic.js y pinta el estado.
// No hace falta tocar este archivo. Los datos están en data.js y la lógica en logic.js.
import { TITLE } from './data.js';
import {
  createApi, login, listPage, saveItem, deleteItem, pageInfo, reduce, createLatest, describeError, INITIAL_STATE,
} from './logic.js';

const byId = (id) => document.getElementById(id);

// Los textos que llegan de la API se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const showMessage = (text, ok = false) => {
  byId('message').textContent = text;
  byId('message').classList.toggle('ok', ok);
};

// La sesión vive solo en memoria: al recargar la página hay que iniciarla otra vez.
// Así ningún otro script de la página puede leer el token en localStorage.
let session = null;

const renderSession = () => {
  byId('session-user').textContent = session ? session.user : 'sin iniciar';
  byId('login-form').hidden = session !== null;
  byId('logout-box').hidden = session === null;
};

// La API la sirve el mismo servidor que la página (node server.js), así que su URL base es la de la página.
const api = createApi(window.location.origin, {
  getToken: () => session?.token,
  onUnauthorized: () => {
    session = null;
    renderSession();
  },
});

// El estado de la lista solo cambia con dispatch, y cada cambio vuelve a pintar la lista.
let state = INITIAL_STATE;
const query = { search: '', sort: 'id', page: 1 };

const STATUS_TEXT = {
  idle: '',
  loading: '⏳ Cargando...',
  success: '',
  empty: 'Ninguna ficha coincide con la búsqueda.',
};

const itemHtml = (item) => `
  <div class="item" data-id="${escapeHtml(item.id)}">
    <div class="item-content">
      <h3>#${escapeHtml(item.id)} · ${escapeHtml(item.name)}</h3>
      <p>${escapeHtml(item.detail)}</p>
    </div>
    <div class="item-actions">
      <button type="button" class="btn-edit" data-action="edit" title="Editar detalle">✏️</button>
      <button type="button" class="btn-delete" data-action="delete" title="Borrar">🗑️</button>
    </div>
  </div>`;

const render = () => {
  byId('state-status').textContent = state.status;
  byId('status-line').textContent = state.status === 'error' ? `❌ ${state.error}` : STATUS_TEXT[state.status] ?? '';
  byId('status-line').classList.toggle('ok', state.status !== 'error');
  byId('item-list').classList.toggle('loading', state.status === 'loading');
  byId('item-list').setAttribute('aria-busy', String(state.status === 'loading'));
  byId('item-list').innerHTML = state.items.map(itemHtml).join('');
  const info = state.meta ? pageInfo(state.meta) : { label: '', hasPrev: false, hasNext: false };
  byId('page-label').textContent = info.label;
  byId('prev').disabled = !info.hasPrev;
  byId('next').disabled = !info.hasNext;
};

const dispatch = (event) => {
  state = reduce(state, event);
  render();
};

// Cada búsqueda nueva cancela la anterior: solo la última puede cambiar la lista.
const listLatest = createLatest((params, signal) => listPage(api, params, signal));

const load = async () => {
  dispatch({ type: 'start' });
  try {
    dispatch({ type: 'success', result: await listLatest(query) });
  } catch (error) {
    if (error.name === 'AbortError') return;
    console.error(error);
    dispatch({ type: 'failure', message: describeError(error) });
  }
};

// Ejecuta una acción que cambia datos: muestra su resultado o su error y vuelve a cargar la lista.
const run = async (action) => {
  try {
    showMessage(`✔ ${await action()}`, true);
    await load();
  } catch (error) {
    console.error(error);
    showMessage(`❌ ${describeError(error)}`);
    return error;
  }
};

byId('search').addEventListener('input', (event) => {
  query.search = event.target.value.trim();
  query.page = 1;
  load();
});

byId('sort').addEventListener('change', (event) => {
  query.sort = event.target.value;
  query.page = 1;
  load();
});

byId('prev').addEventListener('click', () => {
  query.page -= 1;
  load();
});

byId('next').addEventListener('click', () => {
  query.page += 1;
  load();
});

byId('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    session = await login(api, byId('user').value.trim(), byId('password').value);
    byId('password').value = '';
    renderSession();
    showMessage(`✔ Sesión iniciada como ${session.user} (caduca en ${session.expiresIn} s)`, true);
  } catch (error) {
    console.error(error);
    showMessage(`❌ ${describeError(error)}`);
  }
});

byId('logout').addEventListener('click', () => run(async () => {
  await api('/api/logout', { method: 'POST' });
  session = null;
  renderSession();
  return 'Sesión cerrada';
}));

byId('create-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = byId('new-name').value;
  const detail = byId('new-detail').value;
  byId('error-name').textContent = '';
  byId('error-detail').textContent = '';
  const error = await run(async () => {
    const created = await saveItem(api, { name, detail });
    event.target.reset();
    return `Creada la ficha #${created.id} · ${created.name}`;
  });
  byId('error-name').textContent = error?.fields?.name ?? '';
  byId('error-detail').textContent = error?.fields?.detail ?? '';
});

byId('item-list').addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const id = Number(button.closest('.item').dataset.id);
  const item = state.items.find((entry) => entry.id === id);

  if (button.dataset.action === 'edit') {
    const detail = window.prompt(`Nuevo detalle de «${item.name}»`, item.detail);
    if (detail === null) return;
    await run(async () => {
      const updated = await saveItem(api, { id, detail });
      return `Actualizada la ficha #${updated.id}`;
    });
  }

  if (button.dataset.action === 'delete') {
    // Borrado optimista: la ficha desaparece ya y vuelve si la API no la borra.
    const previous = state.items;
    dispatch({ type: 'remove', id });
    try {
      await deleteItem(api, id);
      showMessage(`✔ Borrada la ficha #${id}`, true);
      // Si era la última ficha de su página, vuelve a la anterior.
      if (state.items.length === 0 && query.page > 1) query.page -= 1;
      await load();
    } catch (error) {
      console.error(error);
      dispatch({ type: 'restore', items: previous, message: `No se ha borrado: ${describeError(error)}` });
    }
  }
});

document.title = TITLE.replace(/^\S+\s/, '');
byId('app-title').textContent = TITLE;
renderSession();
load();
