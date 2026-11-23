// Una fábrica que elige qué crear: un avisador por correo, por SMS o por consola.
// Los tres tienen el mismo método, send, así que quien los usa no necesita saber cuál tiene.

const BUILDERS = {
  email: ({ to }) => ({
    kind: 'email',
    send: (text) => `Correo a ${to}: ${text}`,
  }),
  sms: ({ to }) => ({
    kind: 'sms',
    // Un SMS tiene 160 caracteres como máximo.
    send: (text) => `SMS a ${to}: ${text.slice(0, 160)}`,
  }),
  console: () => ({
    kind: 'console',
    send: (text) => `[aviso] ${text}`,
  }),
};

export const createNotifier = (kind, options = {}) => {
  const build = BUILDERS[kind];
  if (!build) throw new Error(`No hay avisadores de tipo «${kind}»`);
  return build(options);
};
