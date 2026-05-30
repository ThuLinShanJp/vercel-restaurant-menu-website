"use client";

import { useState } from "react";
import { LanguageProvider } from "@/components/language-context";
import { Header } from "@/components/header";
import { CategoryTabs } from "@/components/category-tabs";
import { MenuList } from "@/components/menu-list";

type Category = "food" | "drinks" | "desserts";

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("food");

  return (
    <>
      <Header />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className="min-h-screen pb-8">
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
