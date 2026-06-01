"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLocale } from "./language-context";
import { getLocalizedText } from "@/lib/locale";
import type { PromotionBanner } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PromoBannerCarouselProps {
  banners: PromotionBanner[];
}

export function PromoBannerCarousel({ banners }: PromoBannerCarouselProps) {
  const { locale } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (banners.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    if (banners.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    if (banners.length === 0) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, banners.length]);

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-3 mt-3 rounded-2xl overflow-hidden">
      <div className="relative aspect-[2/1] bg-muted">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={banner.image}
              alt={getLocalizedText(banner.title, locale)}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
              <h2 className="text-white text-lg sm:text-xl font-bold mb-1 drop-shadow-lg">
                {getLocalizedText(banner.title, locale)}
              </h2>
              <p className="text-white/90 text-xs sm:text-sm drop-shadow-md">
                {getLocalizedText(banner.description, locale)}
              </p>
            </div>
          </div>
        ))}
      </div>

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
