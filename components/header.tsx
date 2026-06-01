"use client";

import { useLocale } from "./language-context";
import { translations } from "@/lib/translations";

export function Header() {
  const { locale, setLocale } = useLocale();
  const t = translations[locale];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">
            {t.header.name}
          </h1>

          <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setLocale("en")}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                locale === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("ja")}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                locale === "ja"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              JA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
