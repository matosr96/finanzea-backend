import { Collection, getModel } from "../../constants-definitions";
import { Saving, SavingSchemaMongo } from "../../types/models/saving";

export const getOneSaving = async (uuid: string): Promise<Saving> => {
  const model = await getModel(Collection.SAVINGS, SavingSchemaMongo);
  const obj = (await model.findOne({ uuid: uuid })) as Saving;
  return obj;
};
