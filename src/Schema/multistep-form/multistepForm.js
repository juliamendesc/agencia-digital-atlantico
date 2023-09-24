import { z } from 'zod';
import { personalDataSchema } from './IPersonalData';
import { businessAreaSchema } from './IBusinessArea';
import { websiteSchema } from './IWebsite';
import { instagramSchema } from './IInstagram';
import { facebookSchema } from './IFacebook';
import { businessSizeSchema } from './IBusinessSize';
import { hasHiredPaidAdsSchema } from './hasHiredPaidAds';
import { monthlyBudgetSchema } from './monthlyBudget';

export const multistepFormSchema = z
  .object({
    personalData: personalDataSchema,
    businessArea: businessAreaSchema,
    website: websiteSchema,
    instagram: instagramSchema,
    facebook: facebookSchema,
    businessSize: businessSizeSchema,
    hasHiredPaidAds: hasHiredPaidAdsSchema,
    monthlyBudget: monthlyBudgetSchema,
  })
  .required();
