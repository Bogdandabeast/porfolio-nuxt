import { z } from 'zod';

export const jobSchema = z.object({
  title: z.string(),
  company_name: z.string(),
  start_date: z.number(),
  end_date: z.union([z.string(), z.number()]),
});

export const jobListSchema = z.array(jobSchema);

export const skillSectionSchema = z.object({
  field: z.string(),
  skills: z.array(z.string()),
});

export const aboutDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  joblist_title: z.string(),
  skilllist_title: z.string(),
  button: z.object({
    text: z.string(),
    link: z.string(),
  }),
});

export const skillSectionsSchema = z.array(skillSectionSchema);
