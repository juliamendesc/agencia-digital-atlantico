import { z } from 'zod';

export const businessSizeSchema = z
  .object({
    businessSize: z
      .union([
        z.literal('1-3'),
        z.literal('4-10'),
        z.literal('11-20'),
        z.literal('21-50'),
        z.literal('+50'),
      ])
      .nullable(),
  })
  .required();
