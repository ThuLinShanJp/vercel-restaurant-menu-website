import { defineField, defineType } from "sanity";

/**
 * Reusable object type for EN / JA copy.
 * Maps to `LocalizedText` / `SanityLocalizedText` in `@/types`.
 */
export const localizedString = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({
      name: "en",
      title: "English",
      type: "string",
    }),
    defineField({
      name: "ja",
      title: "Japanese",
      type: "string",
    }),
  ],
});
