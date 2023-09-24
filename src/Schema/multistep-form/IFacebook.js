import { z } from 'zod';

export const facebookSchema = z
  .object({
    facebookAccount: z.union([
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
    hasFacebook: z.union([z.literal('Sim'), z.literal('Não')]),
  })
  .required();
