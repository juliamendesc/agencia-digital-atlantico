import { z } from 'zod';

export const businessAreaSchema = z
  .string({
    required_error: 'Campo obrigatório',
  })
  .min(3, { message: 'Área de negócio deve ter mais de 3 caracteres' })
  .max(100, {
    message: 'Área de negócio deve ter menos de 100 caracteres',
  });
