import { z } from 'zod';

export const instagramSchema = z
  .object({
    instagramAccount: z.undefined().or(
      z
        .string()
        .trim()
        .regex(/^(?!http.*$).*/, {
          message: 'Insira seu nome de usuário do Instagram.',
        })
        .optional()
        .nullish(),
    ),
    hasInstagram: z.union([z.literal('Sim'), z.literal('Não')]),
  })
  .required();
