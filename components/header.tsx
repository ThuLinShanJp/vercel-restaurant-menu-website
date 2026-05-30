"use client";

import { useState } from "react";
import { useLanguage } from "./language-context";
import { translations } from "@/lib/translations";
import { Menu, X } from "lucide-react";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif tracking-tight text-foreground">
              {language === "en" ? "Sakura" : "桜"}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#menu"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.menu}
            </a>
            <a
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher & Reserve Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center border border-border rounded-full overflow-hidden">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === "en"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("jp")}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  language === "jp"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                JP
              </button>
            </div>

            {/* Reserve Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            >
              {t.nav.reserve}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.menu}
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.contact}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
              >
                {t.nav.reserve}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
