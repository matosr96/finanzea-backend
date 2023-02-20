import { Collection, getModel } from "../../constants-definitions";
import { ExpenseSchemaMongo, PartialExpense } from "../../types";

export const updateExpense = async ( uuid: string, data: PartialExpense ): Promise<PartialExpense | Error> => {
  const model = await getModel(Collection.EXPENSES, ExpenseSchemaMongo);
  const obj = await model.findOne({ uuid });
  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
