// schemas/triplePanelSlide.ts
import { defineType, defineField } from "sanity";

export const triplePanelSlide = defineType({
  name: "triplePanelSlide",
  title: "Triple Panel Slide",
  type: "object",
  fields: [
    defineField({
      name: "leftImage",
      title: "Left Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "centerImage",
      title: "Center Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rightBg",
      title: "Right Panel Background Color",
      type: "string",
      description: "HEX code, e.g. #C7C3C1",
    }),
    defineField({
      name: "text",
      title: "Right Panel Text",
      type: "string",
    }),
  ],
});
