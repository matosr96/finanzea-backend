import { RouteOptions } from "fastify";
import { createExpenseRoute } from "./create";
import { deleteExpenseByIdRoute } from "./delete";
import { getOneExpenseRoute } from "./get-by-id";
import { expensesListRoute } from "./list";
import { updateExpenseRoute } from "./update";

export const expensesRoutes: RouteOptions[] = [
  createExpenseRoute,
  deleteExpenseByIdRoute,
  getOneExpenseRoute,
  expensesListRoute,
  updateExpenseRoute
];
