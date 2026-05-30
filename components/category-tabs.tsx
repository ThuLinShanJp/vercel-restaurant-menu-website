"use client";

import { useLanguage } from "./language-context";
import { translations } from "@/lib/translations";

type Category = "food" | "drinks" | "desserts";

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const categories: { key: Category; label: string }[] = [
    { key: "food", label: t.categories.food },
    { key: "drinks", label: t.categories.drinks },
    { key: "desserts", label: t.categories.desserts },
  ];

  return (
    <div className="sticky top-[57px] z-40 bg-background border-b border-border">
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
