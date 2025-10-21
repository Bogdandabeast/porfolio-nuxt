import { z } from 'zod';

export const indexSchema = z.object({
  title: z.string(),
  description: z.string(),
  button: z.object({
    text: z.string(),
  }),
});
