import { Collection, getModel } from "../../constants-definitions";
import { Category, CategorySchemaMongo } from "../../types";

export const getOneCategory = async (uuid: string): Promise<Category> => {
  const model = await getModel(Collection.CATEGORIES, CategorySchemaMongo);
  const category = (await model.findOne({ uuid: uuid })) as Category;
  return category;
};
