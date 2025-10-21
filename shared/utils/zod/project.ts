import { z } from 'zod';

export const projectCardSchema = z.object({
  name: z.string(),
  description: z.string(),
  img: z.string(),
  tags: z.array(z.string()),
});

export const projectCardsSchema = z.array(projectCardSchema);
