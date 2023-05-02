import { z } from 'zod';

const example = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20)
});

export default {
  example
};
