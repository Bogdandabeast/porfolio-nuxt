import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string(),
  name_placeholder: z.string(),
  email: z.string(),
  email_placeholder: z.string(),
  message: z.string(),
  message_placeholder: z.string(),
  submit_button: z.string(),
});

export const contactSchema = z.object({
  title: z.string(),
  description: z.string(),
  find_me: z.string(),
  email_title: z.string(),
  email: z.string(),
});
