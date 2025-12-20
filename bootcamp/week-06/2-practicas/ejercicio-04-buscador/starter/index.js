const escapePattern = pattern => pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const highlight = (
  text,
  pattern,
  flags = 'gi',
  { escapeInput = true } = {}
) => {
  // TODO: implement
  return text;
};
