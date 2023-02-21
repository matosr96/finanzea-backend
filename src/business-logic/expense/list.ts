import { Collection, getModel } from "../../constants-definitions";
import { ExpenseSchemaMongo } from "../../types";

interface Result {
    count: number;
    page: number;
    pages: number;
    items: any[];
  }

export const expensesList = async ( page: number, limit: number ): Promise<Result> => {
    const model = getModel(Collection.EXPENSES, ExpenseSchemaMongo);
    const actualPage = page || 1;
    const pageSize = limit || 8;
    const skip = (actualPage - 1) * pageSize;
    const total = await model.countDocuments();
    const pages = Math.ceil(total / pageSize);
    const expenses = await model.find({}).skip(skip).limit(pageSize);
    return {
      count: expenses.length,
      page: actualPage,
      pages,
      items: expenses,
    };
  };