import { Collection, getModel } from "../../constants-definitions";
import { SavingSchemaMongo } from "../../types/models/saving";

export const deleteSaving = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.SAVINGS, SavingSchemaMongo);
    const obj = await model.findOne({uuid:uuid});
    if(!obj) { throw new Error("602")};
    await obj.remove();
    return true;
} 