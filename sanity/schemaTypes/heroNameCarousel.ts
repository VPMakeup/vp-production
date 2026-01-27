import { defineType, defineField } from "sanity";

export const heroNameCarousel = defineType({
  name: "heroNameCarousel",
  title: "Hero Name Carousel",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Carousel Images",
      type: "array",
      of: [{ type: "heroCarouselImage" }],
    }),
  ],
});
