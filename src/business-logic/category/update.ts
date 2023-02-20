import { Collection, getModel } from "../../constants-definitions";
import { CategorySchemaMongo, PartialCategory } from "../../types";

export const updateCategory = async ( uuid: string, data: PartialCategory ): Promise<PartialCategory | Error> => {
  const model = await getModel(Collection.CATEGORIES, CategorySchemaMongo);
  const obj = await model.findOne({ uuid });
  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
