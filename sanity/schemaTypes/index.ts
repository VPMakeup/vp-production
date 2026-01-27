import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";
import { heroCarouselImage } from "./heroCarouselImage";
import { heroNameCarousel } from "./heroNameCarousel";
import { project } from "./project";
import { triplePanelSlide } from "./triplePanelSlide";
import { home } from "./home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    project,
    home,
    triplePanelSlide,
    heroCarouselImage,
    heroNameCarousel,
  ],
};
