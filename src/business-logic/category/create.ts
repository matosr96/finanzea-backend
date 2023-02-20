import { v4 as UUID } from "uuid";
import { Collection, getModel } from "../../constants-definitions";
import { Category, CategorySchemaMongo } from "../../types";

export const createCategory = async (data: Category): Promise<Category | Error> => {
  const model = getModel(Collection.CATEGORIES, CategorySchemaMongo);
  const uuid = UUID();
  const result = new model({ ...data, uuid });
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
