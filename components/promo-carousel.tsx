"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "./language-context";
import { translations, banners } from "@/lib/translations";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PromoBannerCarousel() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const bannerContent = {
    summer: t.banners.summer,
    matcha: t.banners.matcha,
    brunch: t.banners.brunch,
  };

  return (
    <div className="relative mx-3 mt-3 rounded-2xl overflow-hidden">
      {/* Carousel Container */}
      <div className="relative aspect-[2/1] bg-muted">
        {banners.map((banner, index) => {
          const content = bannerContent[banner.id as keyof typeof bannerContent];
          return (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={banner.image}
                alt={content.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
                <h2 className="text-white text-lg sm:text-xl font-bold mb-1 drop-shadow-lg">
                  {content.title}
                </h2>
                <p className="text-white/90 text-xs sm:text-sm drop-shadow-md">
                  {content.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
