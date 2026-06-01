import { defineField, defineType } from "sanity";

export const promotionBanner = defineType({
  name: "promotionBanner",
  title: "Promotion Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Only active banners are shown on the menu.",
      initialValue: true,
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
      description: "Higher priority banners appear first in the carousel.",
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "datetime",
      description: "Optional. Banner is eligible from this date/time.",
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "datetime",
      description: "Optional. Banner is eligible until this date/time.",
    }),
  ],
  orderings: [
    {
      title: "Priority (high to low)",
      name: "priorityDesc",
      by: [{ field: "priority", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      media: "image",
      active: "active",
      priority: "priority",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare({ title, media, active, priority, startDate, endDate }) {
      const formatDate = (iso: string | undefined) => {
        if (!iso) return null;
        return new Date(iso).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      };

      const start = formatDate(startDate);
      const end = formatDate(endDate);
      const schedule =
        start && end
          ? `${start} – ${end}`
          : start
            ? `From ${start}`
            : end
              ? `Until ${end}`
              : null;

      return {
        title: title || "Untitled banner",
        subtitle: [
          active === false ? "Inactive" : "Active",
          priority != null ? `Priority: ${priority}` : null,
          schedule,
        ]
          .filter(Boolean)
          .join(" · "),
        media,
      };
    },
  },
});
