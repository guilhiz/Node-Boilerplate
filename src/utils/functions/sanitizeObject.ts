import sanitizeHtml from 'sanitize-html';

export const sanitizeObject = (object: Record<string, unknown>): Record<string, unknown> => {
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'string') {
      object[key] = sanitizeHtml(object[key] as string).trim();
    } else if (typeof object[key] === 'object' && object[key] !== null) {
      object[key] = sanitizeObject(object[key] as Record<string, unknown>);
    }
  }
  return object;
};
