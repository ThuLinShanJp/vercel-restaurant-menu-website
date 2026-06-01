"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/locale";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LanguageProvider");
  }
  return context;
}

/** @deprecated Use `useLocale` */
export function useLanguage() {
  const { locale, setLocale } = useLocale();
  return { language: locale, setLanguage: setLocale };
}
