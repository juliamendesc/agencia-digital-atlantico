import { z } from 'zod';

export const monthlyBudgetSchema = z
  .string({
    required_error: 'Campo obrigatório',
  })
  .nonempty({ message: 'Campo obrigatório' })
  .nullable();
