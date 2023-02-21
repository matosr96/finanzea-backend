import { RouteOptions } from "fastify";
import { createCategoryRoute } from "./create";
import { deleteCategoryByIdRoute } from "./delete";
import { getOneCategoryRoute } from "./get-by-id";
import { categoriesListRoute } from "./list";
import { updateCategoryRoute } from "./update";

export const categoriesRoutes: RouteOptions[] = [
  createCategoryRoute,
  deleteCategoryByIdRoute,
  getOneCategoryRoute,
  categoriesListRoute,
  updateCategoryRoute
];
