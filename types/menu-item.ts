import type { LocalizedText } from "./localized";
import type { SanityLocalizedText } from "./localized";
import type { SanityImage } from "./sanity-image";

/** Menu item normalized for app display. */
export type MenuItem = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  /** Resolved image URL (or static path) for `next/image`. */
  image: string;
  /** Category document id this item belongs to. */
  category: string;
  taxIncludedPrice: number;
  taxExcludedPrice?: number;
  featured: boolean;
  soldOutToday: boolean;
  available: boolean;
  displayOrder: number;
};

/** Menu item document as returned from a Sanity GROQ query. */
export type SanityMenuItem = {
  _id: string;
  name?: SanityLocalizedText | null;
  description?: SanityLocalizedText | null;
  image?: SanityImage | string | null;
  category?: { _id: string; _ref?: string } | string | null;
  taxIncludedPrice?: number | null;
  taxExcludedPrice?: number | null;
  featured?: boolean | null;
  soldOutToday?: boolean | null;
  available?: boolean | null;
  displayOrder?: number | null;
};
