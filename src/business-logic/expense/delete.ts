import { Collection, getModel } from "../../constants-definitions";
import { ExpenseSchemaMongo } from "../../types";

export const deleteExpense = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.EXPENSES, ExpenseSchemaMongo);
    const obj = await model.findOne({uuid:uuid});
    if(!obj) { throw new Error("602")};
    await obj.remove();
    return true;
} 