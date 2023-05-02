import { stripHtml } from 'string-strip-html';

export const sanitizeObject = (object: Record<string, unknown>): Record<string, unknown> => {
  for (const key of Object.keys(object)) {
    if (typeof object[key] === 'string') {
      object[key] = stripHtml(object[key] as string).result.trim();
    } else if (typeof object[key] === 'object' && object[key] !== null) {
      object[key] = sanitizeObject(object[key] as Record<string, unknown>);
    }
  }

  return object;
};
