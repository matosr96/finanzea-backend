import { v4 as UUID } from "uuid";
import { Collection, getModel } from "../../constants-definitions";
import { PartialSaving, Saving, SavingSchemaMongo } from "../../types/models/saving";

export const createSaving = async (data: PartialSaving): Promise<Saving | Error> => {
  const model = getModel(Collection.SAVINGS, SavingSchemaMongo);
  const uuid = UUID();
  const result = new model({ ...data, uuid });
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
