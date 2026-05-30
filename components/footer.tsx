"use client";

import { useLanguage } from "./language-context";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="bg-foreground text-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              {language === "en" ? "Sakura" : "桜"}
            </h3>
            <p className="text-background/70 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-background/50">
              {t.footer.hours}
            </h4>
            <p className="text-background/80 mb-1">{t.footer.hoursDetails}</p>
            <p className="text-background/60">{t.footer.closed}</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-background/50">
              {t.footer.location}
            </h4>
            <p className="text-background/80 mb-1">{t.footer.address}</p>
            <p className="text-background/80">{t.footer.city}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-background/50">
              {t.footer.contact}
            </h4>
            <p className="text-background/80 mb-1">{t.footer.phone}</p>
            <p className="text-background/80">{t.footer.email}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Sakura. {t.footer.rights}.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
