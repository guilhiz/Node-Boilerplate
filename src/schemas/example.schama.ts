import { z } from "zod";

const exampleSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

export default {
  exampleSchema,
};