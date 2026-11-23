// El cliente de la API de notas: una fábrica que recibe fetch, como createApi del proyecto.
// Tiene dos problemas que encuentra ESLint y uno de formato que encuentra Prettier (pasos 5 y 6).

export class NotesError extends Error {
  constructor({ status, message }) {
    super(message);
    this.name = 'NotesError';
    this.status = status;
  }
}

export const createNotesApi = ({ baseUrl, fetchFn }) => {
  const request = async (options) => {
    const started = Date.now();
    const response = await fetchFn(`${baseUrl}/notes`, options);
    const body = await response.json();
    if (response.status >= 400) throw new NotesError({ status: response.status, message: body.error });
    return body;
  };

  return {
    list: () => request({ method: 'GET' }),
    add: (text) => request({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) }),
  };
};
