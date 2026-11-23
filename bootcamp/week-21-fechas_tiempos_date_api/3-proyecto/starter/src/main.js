// La página de la agenda: lee los datos, llama a las funciones de logic.js y pinta el resultado.
// No hace falta editarlo, pero léelo: aplica la teoría de la semana.

import { APP, EVENTS } from './data.js';
import { parseLocal, toDateKey, addDays, monthGrid, getStatus, relativeLabel, formatWhen } from './logic.js';

const STATUS_TEXT = { past: 'Terminada', ongoing: 'En curso', soon: 'Pronto', upcoming: 'Próxima' };

// «Ahora» es la hora real, salvo que la dirección traiga ?hoy=AAAA-MM-DDTHH:mm: así puedes
// probar la agenda en cualquier fecha (paso 10 del README).
const readNow = () => {
  const param = new URLSearchParams(location.search).get('hoy');
  return (param && parseLocal(...param.split('T'))) || new Date();
};

const now = readNow();
const events = [...EVENTS];
const state = { year: now.getFullYear(), month: now.getMonth(), day: null, zone: '' };

const $ = (selector) => document.querySelector(selector);
const startOf = (event) => parseLocal(event.date, event.time);

// Cabecera de la página y lista de zonas.
const renderStatic = () => {
  document.title = APP.title;
  $('#title').textContent = APP.title;
  $('#intro').textContent = APP.intro;
  $('#today').textContent = `Hoy es ${formatWhen(now, APP.locale).day}.`;

  // Los nombres de los días, de lunes a domingo, a partir de una semana cualquiera que empieza en lunes.
  const weekday = new Intl.DateTimeFormat(APP.locale, { weekday: 'short' });
  const monday = new Date(2026, 2, 2);
  $('#weekdays').replaceChildren(...Array.from({ length: 7 }, (_, index) => {
    const th = document.createElement('th');
    th.scope = 'col';
    th.textContent = weekday.format(addDays(monday, index));
    return th;
  }));

  const ownZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = [['', `Tu zona (${ownZone})`], ...APP.zones.map((zone) => [zone, zone])];
  $('#zone').replaceChildren(...options.map(([value, text]) => new Option(text, value)));
};

// El mes: título, cuadrícula y días con actividades.
const renderMonth = () => {
  const first = new Date(state.year, state.month, 1);
  $('#month-label').textContent = new Intl.DateTimeFormat(APP.locale, { month: 'long', year: 'numeric' }).format(first);

  const countByKey = Object.groupBy(events, (event) => event.date);
  const todayKey = toDateKey(now);
  const rows = monthGrid(state.year, state.month).map((week) => {
    const tr = document.createElement('tr');
    for (const day of week) {
      const td = document.createElement('td');
      if (day !== null) {
        const date = new Date(state.year, state.month, day);
        const key = toDateKey(date);
        const count = countByKey[key]?.length ?? 0;
        td.classList.toggle('today', key === todayKey);
        if (count > 0) {
          const button = document.createElement('button');
          button.type = 'button';
          button.dataset.key = key;
          button.setAttribute('aria-pressed', String(state.day === key));
          button.setAttribute('aria-label', `${formatWhen(date, APP.locale).day}: ${count} ${count === 1 ? 'actividad' : 'actividades'}`);
          const number = document.createElement('span');
          number.textContent = day;
          const badge = document.createElement('span');
          badge.className = 'count';
          badge.textContent = `${count}`;
          button.append(number, badge);
          td.append(button);
        } else {
          td.textContent = day;
        }
      }
      tr.append(td);
    }
    return tr;
  });
  $('#grid tbody').replaceChildren(...rows);
};

// La lista: las actividades del mes (o del día elegido), de la más temprana a la más tardía.
const renderList = () => {
  const monthKey = toDateKey(new Date(state.year, state.month, 1)).slice(0, 7);
  const visible = events
    .filter((event) => (state.day ? event.date === state.day : event.date.startsWith(monthKey)))
    .toSorted((a, b) => startOf(a) - startOf(b));

  $('#list-label').textContent = state.day
    ? `Actividades del ${formatWhen(parseLocal(state.day), APP.locale).day}`
    : 'Actividades del mes';

  if (visible.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'muted';
    empty.textContent = 'No hay actividades este mes.';
    $('#list').replaceChildren(empty);
    return;
  }

  $('#list').replaceChildren(...visible.map((event) => {
    const start = startOf(event);
    const status = getStatus(event, now);
    const when = formatWhen(start, APP.locale, state.zone || undefined);

    const item = document.createElement('li');
    item.className = `card ${status}`;
    const title = document.createElement('h3');
    title.textContent = event.title;
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = STATUS_TEXT[status];
    title.append(badge);
    const time = document.createElement('time');
    time.dateTime = start.toISOString();
    time.textContent = `${when.day} · ${when.time} (${when.offset})`;
    const whenLine = document.createElement('p');
    whenLine.append(time);
    const detail = document.createElement('p');
    detail.className = 'muted';
    detail.textContent = `${event.place} · ${event.minutes} min · ${relativeLabel(start, now, APP.locale)}`;
    item.append(title, whenLine, detail);
    return item;
  }));
};

// Cuántas actividades empiezan entre ahora y dentro de 7 días.
const renderUpcoming = () => {
  const limit = addDays(now, 7);
  const count = events.filter((event) => startOf(event) >= now && startOf(event) < limit).length;
  $('#upcoming').textContent = `En los próximos 7 días: ${count} ${count === 1 ? 'actividad' : 'actividades'}.`;
};

const render = () => {
  renderMonth();
  renderList();
  renderUpcoming();
};

const moveMonth = (step) => {
  const target = new Date(state.year, state.month + step, 1);
  state.year = target.getFullYear();
  state.month = target.getMonth();
  state.day = null;
  render();
};

$('#prev').addEventListener('click', () => moveMonth(-1));
$('#next').addEventListener('click', () => moveMonth(1));

// Un clic en un día con actividades filtra la lista; otro clic en el mismo día la vuelve a mostrar entera.
$('#grid').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-key]');
  if (!button) return;
  state.day = state.day === button.dataset.key ? null : button.dataset.key;
  render();
});

$('#zone').addEventListener('change', (event) => {
  state.zone = event.target.value;
  renderList();
});

// Añadir una actividad: parseLocal rechaza las fechas y horas que no existen.
$('#add').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const date = data.get('date');
  const time = data.get('time');
  const start = parseLocal(date, time);
  if (!start) {
    $('#form-error').textContent = 'Esa fecha u hora no existe en tu zona horaria.';
    return;
  }
  events.push({
    id: crypto.randomUUID(),
    title: data.get('title').trim(),
    date,
    time,
    minutes: Number(data.get('minutes')),
    place: 'Añadida por ti',
  });
  $('#form-error').textContent = '';
  form.reset();
  state.year = start.getFullYear();
  state.month = start.getMonth();
  state.day = date;
  render();
});

renderStatic();
render();
