"use client";

import { useLanguage } from "./language-context";
import { translations } from "@/lib/translations";

type Category = "food" | "drinks" | "desserts" | "seasonal";

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
    { key: "seasonal", label: t.categories.seasonal },
  ];

  return (
    <div className="sticky top-[57px] z-40 bg-background border-b border-border">
      <div className="px-3 py-2.5">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground border border-border hover:bg-secondary"
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
