import { z } from 'zod';

export const websiteSchema = z
  .object({
    websiteUrl: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .url({
        message: 'Por favor, insira um link válido.',
      })
      .optional()
      .nullish(),
    hasWebsite: z.union([z.literal('Sim'), z.literal('Não')]),
  })
  .required();
