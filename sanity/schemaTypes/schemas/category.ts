import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order in category tabs (lower numbers appear first).",
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      order: "order",
    },
    prepare({ title, order }) {
      return {
        title: title || "Untitled category",
        subtitle: order != null ? `Order: ${order}` : undefined,
      };
    },
  },
});
