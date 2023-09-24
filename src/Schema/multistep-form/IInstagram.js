import { z } from 'zod';

export const instagramSchema = z
  .object({
    instagramAccount: z.union([
      z
        .string({
          required_error: 'Insira um endereço de site válido',
        })
        .url({
          message: 'Insira uma url válida',
        })
        .nullish(),
      z.literal(''),
    ]),
    hasInstagram: z.union([z.literal('Sim'), z.literal('Não')]),
  })
  .required();
