import type { LocalizedText } from "./localized";
import type { SanityLocalizedText } from "./localized";
import type { SanityImage } from "./sanity-image";

/** Promotional banner normalized for app display. */
export type PromotionBanner = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  /** Resolved image URL (or static path) for `next/image`. */
  image: string;
  active: boolean;
  priority: number;
};

/** Promotion banner document as returned from a Sanity GROQ query. */
export type SanityPromotionBanner = {
  _id: string;
  title?: SanityLocalizedText | null;
  description?: SanityLocalizedText | null;
  image?: SanityImage | string | null;
  active?: boolean | null;
  priority?: number | null;
};
