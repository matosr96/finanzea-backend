import { Collection, getModel } from "../../constants-definitions";
import { PartialSaving, SavingSchemaMongo } from "../../types/models/saving";

export const updateSaving = async ( uuid: string, data: PartialSaving ): Promise<PartialSaving | Error> => {
  const model = await getModel(Collection.SAVINGS, SavingSchemaMongo);
  const obj = await model.findOne({ uuid });
  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
