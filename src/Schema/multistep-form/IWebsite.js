import { z } from 'zod';

export const websiteSchema = z
  .string({
    required_error: 'Campo obrigatório',
  })
  .url({ message: 'URL inválida' });
