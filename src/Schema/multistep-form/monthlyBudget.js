import { z } from 'zod';

export const monthlyBudgetSchema = z
  .number({
    required_error: 'Campo obrigatório',
  })
  .min(0, { message: 'Valor inválido' })
  .nullable();
