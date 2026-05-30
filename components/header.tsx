"use client";

import { useLanguage } from "./language-context";
import { translations } from "@/lib/translations";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Restaurant Name */}
          <h1 className="text-xl font-bold text-foreground">
            {t.header.name}
          </h1>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                language === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("jp")}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                language === "jp"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              JP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
