import { z } from 'zod';

export const businessAreaSchema = z.object({
  businessArea: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
    .nonempty({
      message: 'Campo obrigatório',
    }),
});
