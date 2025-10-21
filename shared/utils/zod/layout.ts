import { z } from 'zod';

import config from './zod.config';

config();

export const iconSchema = z.object({
  name: z.string(),
  size: z.string(),
  url: z.string(),
  label: z.string(),
});

export const footerSchema = z.object({
  icons: z.array(iconSchema),
  text: z.string(),
});

export const linkSchema = z.object({
  name: z.string(),
  route: z.string(),
});

export const headerSchema = z.object({
  name: z.string(),
  links: z.array(linkSchema),
  aria_label: z.string(),
});
