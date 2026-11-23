// Página del panel: pinta los servicios, lanza las consultas y muestra lo que responde cada uno.
// No hace falta tocar este archivo. Los datos están en data.js y la lógica en logic.js.
import SERVICES, { TITLE } from './data.js';
import {
  requestWithCallback, requestInSequence, requestAll, requestReport, requestFirst, withTimeout,
} from './logic.js';

const byId = (id) => document.getElementById(id);

// Los textos de data.js se escapan antes de entrar con innerHTML.
const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Copia de los servicios: la casilla «Disponible» cambia la copia, no data.js.
let services = SERVICES.map((service) => ({ ...service }));
// Estado de cada tarjeta, en el mismo orden que services.
let statuses = services.map(() => ({ state: 'idle', text: 'Sin consultar' }));

const STATE_ICONS = { idle: '⚪', pending: '⏳', ok: '✅', fail: '❌' };

const itemHtml = (service, index) => {
  const { state, text } = statuses[index];
  return `
  <div class="item" data-index="${index}">
    <div class="item-content">
      <h3>${escapeHtml(service.name)}</h3>
      <div class="item-meta">
        <span class="item-badge">⏱️ ${escapeHtml(service.delay)} ms</span>
        <span class="item-badge badge-status ${state}">${STATE_ICONS[state]} ${escapeHtml(text)}</span>
      </div>
    </div>
    <label class="item-toggle">
      <input type="checkbox" class="toggle-available" ${service.available ? 'checked' : ''}> Disponible
    </label>
  </div>`;
};

const render = () => {
  byId('stat-services').textContent = services.length;
  byId('stat-available').textContent = services.filter(({ available }) => available).length;
  byId('item-list').innerHTML = services.map(itemHtml).join('');
};

const setAll = (state, text) => {
  statuses = services.map(() => ({ state, text }));
  render();
};

const showMessage = (text, ok) => {
  byId('query-message').textContent = text;
  byId('query-message').classList.toggle('ok', ok);
};

let start = 0;
const log = (line) => {
  const ms = Math.round(performance.now() - start);
  byId('query-log').insertAdjacentHTML('beforeend', `<li>${ms} ms · ${escapeHtml(line)}</li>`);
};

const finish = (text, ok) => {
  log(text);
  showMessage(text, ok);
  byId('btn-query').disabled = false;
};

// Modo callback: cada servicio avisa cuando termina, en el orden en que van respondiendo.
const queryWithCallbacks = () => {
  let pending = services.length;
  let answered = 0;
  services.forEach((service, index) => {
    requestWithCallback(service, (error, result) => {
      statuses[index] = error ? { state: 'fail', text: error.message } : { state: 'ok', text: result };
      if (!error) answered += 1;
      log(error ? error.message : `${service.name}: ${result}`);
      render();
      pending -= 1;
      if (pending === 0) finish(`✔ ${answered} de ${services.length} servicios respondieron`, answered > 0);
    });
  });
};

// Modos con promesas: qué función de logic.js usan y cómo pintan lo que devuelve.
const PROMISE_MODES = {
  sequence: {
    run: requestInSequence,
    show: (results) => {
      statuses = results.map((text) => ({ state: 'ok', text }));
      return `✔ ${results.length} servicios, uno detrás de otro`;
    },
  },
  all: {
    run: requestAll,
    show: (results) => {
      statuses = results.map((text) => ({ state: 'ok', text }));
      return `✔ ${results.length} servicios a la vez`;
    },
  },
  report: {
    run: requestReport,
    show: (report) => {
      statuses = report.map(({ ok, text }) => ({ state: ok ? 'ok' : 'fail', text }));
      return `✔ Informe: ${report.filter(({ ok }) => ok).length} de ${report.length} respondieron`;
    },
  },
  first: {
    run: requestFirst,
    show: (result) => {
      statuses = services.map(() => ({ state: 'idle', text: 'Sin consultar' }));
      return `✔ Primera respuesta: ${result}`;
    },
  },
};

const queryWithPromises = (mode, ms) => {
  const { run, show } = PROMISE_MODES[mode];
  const operation = run(services);
  const promise = ms > 0 ? withTimeout(operation, ms) : operation;
  setAll('pending', 'Consultando...');
  promise
    .then((value) => {
      const text = show(value);
      render();
      finish(text, true);
    })
    .catch((error) => {
      // La página muestra el mensaje; la consola, el error completo (con su cause, si lo tiene).
      console.error(error);
      setAll('idle', 'Sin resultado');
      finish(`✖ ${error.message}`, false);
    });
};

byId('app-title').textContent = TITLE;
document.title = TITLE;

byId('query-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const mode = byId('mode').value;
  byId('query-log').innerHTML = '';
  showMessage('Consultando...', true);
  start = performance.now();
  if (mode === 'callback') {
    setAll('pending', 'Consultando...');
    byId('btn-query').disabled = true;
    queryWithCallbacks();
  } else {
    queryWithPromises(mode, Number(byId('timeout').value));
    byId('btn-query').disabled = true;
  }
});

byId('item-list').addEventListener('change', (event) => {
  const card = event.target.closest('[data-index]');
  if (card && event.target.matches('.toggle-available')) {
    const index = Number(card.dataset.index);
    services = services.with(index, { ...services[index], available: event.target.checked });
    render();
  }
});

render();
