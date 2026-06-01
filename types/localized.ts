/** Localized copy for UI display — both locales required after mapping. */
export type LocalizedText = {
  en: string;
  ja: string;
};

/** Localized fields as returned from Sanity before normalization. */
export type SanityLocalizedText = {
  en?: string | null;
  ja?: string | null;
};
