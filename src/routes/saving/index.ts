import { RouteOptions } from "fastify";
import { createSavingRoute } from "./create";
import { deleteSavingRoute } from "./delete";
import { getOneSavingRoute } from "./get-by-id";
import { listSavingsRoute } from "./list";
import { updateSavingRoute } from "./update";

export const savingsRoutes: RouteOptions[] = [
  createSavingRoute,
  deleteSavingRoute,
  getOneSavingRoute,
  listSavingsRoute,
  updateSavingRoute
];
