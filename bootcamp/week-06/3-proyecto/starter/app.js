// Starter CLI/API skeleton
// Nota: usa pnpm o yarn si agregas dependencias

export const normalize = (text, opts = {}) => {
  return text;
};

export const validate = (text, validations = []) => {
  return { ok: true, errors: [] };
};

export const extract = (text, type) => {
  return [];
};

export const extractCustom = (text, pattern, flags = 'g') => {
  return [];
};

export const highlight = (text, pattern, flags = 'gi') => {
  return text;
};

export const replaceSafe = (text, pattern, replacement, flags = 'g') => {
  return text;
};

if (process.argv[2]) {
  const input = process.argv[2];
  console.log('Input:', input);
  // TODO: wire commands/flags
}
