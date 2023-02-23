import { FastifyInstance, RouteOptions } from "fastify";
import { categoriesRoutes } from "./category";
import { expensesRoutes } from "./expense";
import { savingsRoutes } from "./saving";
import { userRoutes } from "./user";

const routes: RouteOptions[] = [
  ...userRoutes,
  ...expensesRoutes,
  ...categoriesRoutes,
  ...savingsRoutes,
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
