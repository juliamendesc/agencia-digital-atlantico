import { z } from 'zod';

export const instagramSchema = z
  .string({
    required_error: 'Campo obrigatório',
  })
  .url({ message: 'URL inválida' });
