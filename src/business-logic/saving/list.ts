import { Collection, getModel } from "../../constants-definitions";
import { SavingSchemaMongo } from "../../types/models/saving";

interface Result {
    count: number;
    page: number;
    pages: number;
    items: any[];
  }

export const savingList = async ( page: number, limit: number ): Promise<Result> => {
    const model = getModel(Collection.SAVINGS, SavingSchemaMongo);
    const actualPage = page || 1;
    const pageSize = limit || 8;
    const skip = (actualPage - 1) * pageSize;
    const total = await model.countDocuments();
    const pages = Math.ceil(total / pageSize);
    const obj = await model.find({}).skip(skip).limit(pageSize);
    return {
      count: obj.length,
      page: actualPage,
      pages,
      items: obj,
    };
  };