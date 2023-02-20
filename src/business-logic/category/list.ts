import { Collection, getModel } from "../../constants-definitions";
import { CategorySchemaMongo } from "../../types";

interface Result {
    count: number;
    page: number;
    pages: number;
    items: any[];
  }

export const categoryList = async ( page: number, limit: number ): Promise<Result> => {
    const model = getModel(Collection.CATEGORIES, CategorySchemaMongo);
    const actualPage = page || 1;
    const pageSize = limit || 10;
    const skip = (actualPage - 1) * pageSize;
    const total = await model.countDocuments();
    const pages = Math.ceil(total / pageSize);
    const categories = await model.find({}).skip(skip).limit(pageSize);
    return {
      count: categories.length,
      page: actualPage,
      pages,
      items: categories,
    };
  };