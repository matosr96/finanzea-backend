import { Collection, getModel } from "../../constants-definitions";
import { Expense, ExpenseSchemaMongo } from "../../types";

export const getOneExpense = async (uuid: string): Promise<Expense> => {
  const model = await getModel(Collection.EXPENSES, ExpenseSchemaMongo);
  const expense = (await model.findOne({ uuid: uuid })) as Expense;
  return expense;
};
