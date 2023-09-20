import { z } from 'zod';

export const contactSchema = z
  .object({
    nome: z
      .string()
      .min(3, {
        message: 'Por favor, preencha o campo com seu nome completo.',
      })
      .max(50, {
        message: 'Por favor, abrevie o seu nome.',
      }),
    email: z.string().email(),
    phone: z
      .string()
      .min(9, {
        message:
          'Por favor, preencha o campo com um número de telefone válido.',
      })
      .max(9, {
        message:
          'Por favor, preencha o campo com um número de telefone válido.',
      }),
    subject: z.string().min(3, {
      message: 'Por favor, preencha o campo com um assunto válido.',
    }),
    message: z
      .string()
      .min(3, {
        message: 'Por favor, preencha o campo com uma mensagem válida.',
      })
      .max(500, {
        message: 'Por favor, preencha o campo com uma mensagem válida.',
      }),
  })
  .required();
