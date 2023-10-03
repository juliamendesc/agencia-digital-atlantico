import { z } from 'zod';

export const hasHiredPaidAdsSchema = z
  .object({
    hasHiredPaidAds: z
      .union([z.literal('Sim'), z.literal('Não')], {
        message: 'Escolha uma opção',
      })
      .nullable(),
  })
  .required();
