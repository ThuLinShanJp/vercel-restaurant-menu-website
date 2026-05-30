"use client";

import { useState } from "react";
import { useLanguage } from "./language-context";
import { translations, menuItems, type MenuItem } from "@/lib/translations";
import Image from "next/image";

const categories = ["starters", "sushi", "mains", "desserts"] as const;

function MenuItemCard({ item }: { item: MenuItem }) {
  const { language } = useLanguage();

  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-secondary">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">
            {item.name[language]}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description[language]}
          </p>
        </div>
        <span className="text-lg font-medium text-foreground whitespace-nowrap">
          ${item.price}
        </span>
      </div>
    </div>
  );
}

export function MenuSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("starters");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
            {t.menu.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-all ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.categories[category]}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
