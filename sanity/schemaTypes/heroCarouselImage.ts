import { defineType, defineField } from "sanity";

export const heroCarouselImage = defineType({
  name: "heroCarouselImage",
  title: "Hero Carousel Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
