import { z } from 'zod';

export const contactSchema = z
  .object({
    nome: z
      .string()
      .min(3, {
        required_error: 'Por favor, preencha o campo com seu nome completo.',
      })
      .max(50, {
        required_error: 'Por favor, abrevie o seu nome.',
      }),
    email: z
      .string({
        required_error: 'Campo obrigatório',
      })
      .email({ message: 'E-mail inválido' }),
    phone: z.string().min(9, {
      required_error:
        'Por favor, preencha o campo com um número de telefone válido.',
    }),
    subject: z.string().min(3, {
      required_error: 'Por favor, preencha o campo com um assunto válido.',
    }),
    message: z
      .string()
      .min(3, {
        required_error: 'Por favor, preencha o campo com uma mensagem válida.',
      })
      .max(500, {
        required_error: 'Por favor, preencha o campo com uma mensagem válida.',
      }),
  })
  .required();
