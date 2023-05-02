import { z } from 'zod';

import exampleSchema from '../schemas/example.schema';

export type exampleProps = z.infer<typeof exampleSchema.example>;
