import { z } from 'zod';

export const hasHiredPaidAdsSchema = z
  .union([z.literal('Sim'), z.literal('Não')])
  .nullable();
