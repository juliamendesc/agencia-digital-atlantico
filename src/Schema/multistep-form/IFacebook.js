import { z } from 'zod';

export const facebookSchema = z
  .object({
    facebook: z.union([
      z
        .string({
          message: 'Insira um endereço de site válido',
        })
        .url()
        .nullish(),
      z.literal(''),
    ]),
    hasFacebook: z.boolean(),
  })
  .required();
