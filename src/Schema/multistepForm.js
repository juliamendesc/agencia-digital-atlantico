import { z } from 'zod';
import { personalDataSchema } from './multistep-form/IPersonalData';
import { businessAreaSchema } from './multistep-form/IBusinessArea';
import { websiteSchema } from './multistep-form/IWebsite';
import { instagramSchema } from './multistep-form/IInstagram';
import { facebookSchema } from './multistep-form/IFacebook';
import { businessSizeSchema } from './multistep-form/IBusinessSize';
import { hasHiredPaidAdsSchema } from './multistep-form/hasHiredPaidAds';
import { monthlyBudgetSchema } from './multistep-form/monthlyBudget';

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
