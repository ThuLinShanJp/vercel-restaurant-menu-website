import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "taxIncludedPrice",
      title: "Tax-included price",
      type: "number",
      description: "Price in JPY (tax included).",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "taxExcludedPrice",
      title: "Tax-excluded price",
      type: "number",
      description: "Price in JPY (tax excluded).",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "soldOutToday",
      title: "Sold out today",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      type: "number",
      description: "Sort order within a category (lower numbers appear first).",
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name.en",
      media: "image",
      categoryTitle: "category.title.en",
      taxIncludedPrice: "taxIncludedPrice",
      featured: "featured",
      available: "available",
      soldOutToday: "soldOutToday",
    },
    prepare({
      title,
      media,
      categoryTitle,
      taxIncludedPrice,
      featured,
      available,
      soldOutToday,
    }) {
      const flags = [
        featured ? "Featured" : null,
        soldOutToday ? "Sold out today" : null,
        available === false ? "Unavailable" : null,
      ].filter(Boolean);

      return {
        title: title || "Untitled item",
        subtitle: [
          categoryTitle,
          taxIncludedPrice != null ? `¥${taxIncludedPrice}` : null,
          ...flags,
        ]
          .filter(Boolean)
          .join(" · "),
        media,
      };
    },
  },
});
