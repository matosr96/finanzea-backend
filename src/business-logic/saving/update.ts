import { Collection, getModel } from "../../constants-definitions";
import { PartialSaving, SavingSchemaMongo } from "../../types/models/saving";
import { getOneSaving } from "./get-one";

export const updateSaving = async (
  uuid: string,
  data: PartialSaving
): Promise<PartialSaving | Error> => {
  let cal;
  if (data.amount_saved != undefined) {
    cal = (data.amount_saved * 100) / 100;
  }
  data.percentage = cal;
  const model = await getModel(Collection.SAVINGS, SavingSchemaMongo);
  const obj = await model.findOne({ uuid: uuid });

  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }
  const dataToUpdate = { ...data };
  await obj.updateOne(dataToUpdate);
  return { ...obj.doc };
};
