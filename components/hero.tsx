"use client";

import { useLanguage } from "./language-context";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Japanese restaurant ambiance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-background/70 mb-4">
          {t.hero.subtitle}
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-background mb-6">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-background/80 max-w-md mx-auto mb-10 leading-relaxed">
          {t.hero.tagline}
        </p>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium tracking-wide bg-background text-foreground rounded-full hover:bg-background/90 transition-colors"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-background/60" />
      </div>
    </section>
  );
}
