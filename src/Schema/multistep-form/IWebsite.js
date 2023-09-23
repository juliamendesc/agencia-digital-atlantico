import { z } from 'zod';

export const websiteSchema = z
  .object({
    website: z.union([
      z
        .string({
          message: 'Insira um endereço de site válido',
        })
        .url()
        .nullish(),
      z.literal(''),
    ]),
    hasWebsite: z.boolean(),
  })
  .required();
