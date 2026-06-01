import type { LocalizedText } from "@/types";

export type Locale = "en" | "ja";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: readonly Locale[] = ["en", "ja"];

type LocalizedValue = LocalizedText | Partial<LocalizedText> | null | undefined;

/**
 * Returns localized copy for the given locale.
 * Falls back to the other locale when the requested value is empty.
 */
export function getLocalizedText(value: LocalizedValue, locale: Locale): string {
  if (!value) return "";

  const text = value[locale]?.trim();
  if (text) return text;

  const fallbackLocale: Locale = locale === "en" ? "ja" : "en";
  return value[fallbackLocale]?.trim() ?? "";
}

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
