import { z } from 'zod';

export const multistepFormSchema = z
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
    countryCode: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .min(2, { message: 'País inválido' }),
    phone: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .min(9, { message: 'Telefone inválido' }),
    businessArea: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .min(3, { message: 'Área de negócio deve ter mais de 3 caracteres' })
      .max(100, {
        message: 'Área de negócio deve ter menos de 100 caracteres',
      }),
    website: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .url({ message: 'URL inválida' }),
    instagram: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .url({ message: 'URL inválida' }),
    facebook: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .url({ message: 'URL inválida' }),
    businessSize: z
      .union([
        z.literal('1-3'),
        z.literal('4-10'),
        z.literal('11-20'),
        z.literal('21-50'),
        z.literal('+50'),
      ])
      .nullable(),
    hasHiredPaidAds: z.union([z.literal('Sim'), z.literal('Não')]).nullable(),
    monthlyBudget: z
      .number({
        required_error: 'Campo obrigatório',
      })
      .min(0, { message: 'Valor inválido' })
      .nullable(),
  })
  .required();
