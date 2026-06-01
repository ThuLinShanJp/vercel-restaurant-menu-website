import type { LocalizedText } from "./localized";
import type { SanityLocalizedText } from "./localized";

/** Category normalized for app display. */
export type Category = {
  id: string;
  title: LocalizedText;
  order: number;
};

/** Category document as returned from a Sanity GROQ query. */
export type SanityCategory = {
  _id: string;
  title?: SanityLocalizedText | null;
  order?: number | null;
};
