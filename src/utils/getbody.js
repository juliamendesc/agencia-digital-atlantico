export default async function getBody(data) {
  const {
    personalData,
    businessArea,
    website,
    instagram,
    facebook,
    businessSize,
    hasHiredPaidAds,
    monthlyBudget,
  } = await data;

  const body = {
    nome: personalData?.nome,
    email: personalData?.email,
    phone: personalData?.phone,
    businessArea: businessArea,
    businessSize: businessSize?.businessSize,
    hasWebsite: website?.hasWebsite,
    websiteUrl: website?.websiteUrl || null,
    hasInstagram: instagram?.hasInstagram,
    instagramAccount: instagram?.instagramAccount || null,
    hasFacebook: facebook?.hasFacebook,
    facebookAccount: facebook?.facebookAccount || null,
    hasHiredPaidAds: hasHiredPaidAds?.hasHiredPaidAds,
    monthlyBudget: monthlyBudget,
  };

  return body;
}
