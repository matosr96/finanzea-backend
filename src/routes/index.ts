import { FastifyInstance, RouteOptions } from "fastify";
import { expensesRoutes } from "./expense";
import { userRoutes } from "./user";

const routes: RouteOptions[] = [...userRoutes, ...expensesRoutes];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
