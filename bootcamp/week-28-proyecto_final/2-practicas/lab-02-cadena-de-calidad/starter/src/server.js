// Una API de notas en memoria para los tests de integración. No hace falta editarla.
//   GET  /notes            200 [ ...notas ]
//   POST /notes { text }   201 { id, text }, o 422 { error } si text está vacío
import { createServer } from 'node:http';

const send = (res, status, body) =>
  res.writeHead(status, { 'Content-Type': 'application/json' }).end(JSON.stringify(body));

const readBody = async (req) => {
  let text = '';
  for await (const chunk of req) text += chunk;
  return JSON.parse(text || '{}');
};

export const startNotesServer = async () => {
  const notes = [];
  const server = createServer(async (req, res) => {
    if (req.url !== '/notes') return send(res, 404, { error: 'No encontrado' });
    if (req.method === 'GET') return send(res, 200, notes);
    const { text = '' } = await readBody(req);
    if (text.trim() === '') return send(res, 422, { error: 'La nota está vacía' });
    const note = { id: notes.length + 1, text: text.trim() };
    notes.push(note);
    return send(res, 201, note);
  });
  await new Promise((resolve) => server.listen(0, resolve));
  return {
    url: `http://localhost:${server.address().port}`,
    close: () => new Promise((resolve) => server.close(resolve)),
  };
};
