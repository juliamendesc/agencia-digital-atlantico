import { z } from 'zod';

export const personalDataSchema = z
  .object({
    nome: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
    email: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .email({ message: 'E-mail inválido' }),
    phone: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .min(9, { message: 'Telefone inválido' }),
  })
  .required();
