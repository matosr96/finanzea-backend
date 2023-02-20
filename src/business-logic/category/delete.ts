import { Collection, getModel } from "../../constants-definitions";
import { CategorySchemaMongo } from "../../types";

export const deleteCategory = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.CATEGORIES, CategorySchemaMongo);
    const obj = await model.findOne({uuid:uuid});
    if(!obj) { throw new Error("602")};
    await obj.remove();
    return true;
} 