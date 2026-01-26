import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";

import { project } from "./project";
import { triplePanelSlide } from "./triplePanelSlide";
import { home } from "./home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, project, home, triplePanelSlide],
};
