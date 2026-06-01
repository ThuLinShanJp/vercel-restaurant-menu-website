"use client";

import { useState } from "react";
import { LanguageProvider, useLocale } from "@/components/language-context";
import { Header } from "@/components/header";
import { PromoBannerCarousel } from "@/components/promo-carousel";
import { FeaturedItems } from "@/components/featured-items";
import { CategoryTabs } from "@/components/category-tabs";
import { MenuList } from "@/components/menu-list";
import type { Category, MenuItem, PromotionBanner } from "@/types";

export type MenuPageProps = {
  categories: Category[];
  menuItems: MenuItem[];
  promotions: PromotionBanner[];
};

function MenuPageContent({
  categories,
  menuItems,
  promotions,
}: MenuPageProps) {
  const { locale } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState(
    () => categories[0]?.id ?? ""
  );

  return (
    <>
      <Header />
      <main className="min-h-screen pb-8">
        <PromoBannerCarousel banners={promotions} />
        <FeaturedItems items={menuItems} />
        <CategoryTabs
          categories={categories}
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <MenuList
          menuItems={menuItems}
          selectedCategory={selectedCategory}
          locale={locale}
        />
      </main>
    </>
  );
}

export function MenuPage(props: MenuPageProps) {
  return (
    <LanguageProvider>
      <MenuPageContent {...props} />
    </LanguageProvider>
  );
}
