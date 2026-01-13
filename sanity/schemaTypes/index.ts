import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";

import { project } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, project],
};
