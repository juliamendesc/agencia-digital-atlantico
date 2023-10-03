import { z } from 'zod';

export const monthlyBudgetSchema = z.object({
  monthlyBudget: z.string().nullable(),
});
