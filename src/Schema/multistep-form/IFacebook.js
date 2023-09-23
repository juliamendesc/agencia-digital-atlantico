import { z } from 'zod';

export const facebookSchema = z
  .string({
    required_error: 'Campo obrigatório',
  })
  .url({ message: 'URL inválida' });
