export default async function getBody(data) {
  const {
    personalData,
    businessArea,
    website,
    instagramAccount,
    facebook,
    businessSize,
    hasHiredPaidAds,
    hasInstagram,
    hasFacebook,
    monthlyBudget,
  } = await data;

  const body = {
    nome: personalData?.nome,
    email: personalData?.email,
    phone: personalData?.phone,
    businessArea: businessArea,
    businessSize: businessSize,
    hasWebsite: website?.hasWebsite,
    websiteUrl: website?.websiteUrl || null,
    hasInstagram: hasInstagram,
    instagramAccount: instagramAccount || null,
    hasFacebook: hasFacebook,
    facebookAccount: facebook?.facebookAccount || null,
    hasHiredPaidAds: hasHiredPaidAds,
    monthlyBudget: monthlyBudget,
  };

  return body;
}
