export const LEGAL_VERSION = "2026-06-30";
export const LEGAL_LAST_UPDATED = "30 June 2026";
export const LEGAL_BASE_URL = "https://leadsnipper.com";

export const LEGAL_URLS = {
  privacy: `${LEGAL_BASE_URL}/privacy-policy`,
  terms: `${LEGAL_BASE_URL}/terms-of-service`,
  refund: `${LEGAL_BASE_URL}/refund-policy`,
  dataUse: `${LEGAL_BASE_URL}/legal/data-use`,
} as const;

export const LEGAL_CONTACT = {
  hello: "hello@leadsnipper.com",
  privacy: "privacy@leadsnipper.com",
  billing: "billing@leadsnipper.com",
  support: "support@leadsnipper.com",
} as const;

export const LEGAL_ENTITY = {
  name: "LeadSnipper Technologies",
  jurisdiction: "Indore, Madhya Pradesh, India",
} as const;
