import { z } from 'zod';

export const instagramSchema = z
  .object({
    instagram: z.union([
      z
        .string({
          message: 'Insira um endereço de site válido',
        })
        .url()
        .nullish(),
      z.literal(''),
    ]),
    hasInstagram: z.boolean(),
  })
  .required();
