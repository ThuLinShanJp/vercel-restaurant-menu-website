import { type SchemaTypeDefinition } from "sanity";

import { category } from "./schemas/category";
import { localizedString } from "./schemas/localizedString";
import { menuItem } from "./schemas/menuItem";
import { promotionBanner } from "./schemas/promotionBanner";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localizedString, category, menuItem, promotionBanner],
};
