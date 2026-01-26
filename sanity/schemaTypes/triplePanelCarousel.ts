// schemas/triplePanelCarousel.ts
import { defineType, defineField } from "sanity";

export const triplePanelCarousel = defineType({
  name: "triplePanelCarousel",
  title: "Triple Panel Carousel",
  type: "document",
  fields: [
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [{ type: "triplePanelSlide" }],
    }),
  ],
});
