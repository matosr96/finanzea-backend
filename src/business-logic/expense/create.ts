import { v4 as UUID } from "uuid";
import { Collection, getModel } from "../../constants-definitions";
import { Expense, ExpenseSchemaMongo, PartialExpense } from "../../types";

export const createExpense = async (data: PartialExpense): Promise<Expense | Error> => {
  const model = getModel(Collection.EXPENSES, ExpenseSchemaMongo);
  const uuid = UUID();
  const result = new model({ ...data, uuid });
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
