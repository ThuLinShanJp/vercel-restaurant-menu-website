"use client";

import { useState } from "react";
import { LanguageProvider } from "@/components/language-context";
import { Header } from "@/components/header";
import { PromoBannerCarousel } from "@/components/promo-carousel";
import { FeaturedItems } from "@/components/featured-items";
import { CategoryTabs } from "@/components/category-tabs";
import { MenuList } from "@/components/menu-list";

type Category = "food" | "drinks" | "desserts" | "seasonal";

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("food");

  return (
    <>
      <Header />
      <main className="min-h-screen pb-8">
        {/* Promotional Banner Carousel */}
        <PromoBannerCarousel />
        
        {/* Featured Items Section */}
        <FeaturedItems />
        
        {/* Category Tabs */}
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Menu List */}
        <MenuList category={activeCategory} />
      </main>
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <MenuPage />
    </LanguageProvider>
  );
}
