// schemas/home.ts
import { defineType, defineField } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "triplePanelSlides",
      title: "Triple Panel Slides",
      type: "array",
      of: [{ type: "triplePanelSlide" }],
    }),
  ],
});
