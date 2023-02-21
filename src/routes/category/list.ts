import { RouteOptions } from "fastify";
import { categoryList } from "../../business-logic";

export const categoriesListRoute: RouteOptions = {
  method: "GET",
  url: "/categories",
  handler: async (request, reply) => {
    try {
      const { query } = request;
      const { page, limit } = query as any;
      const obj = await categoryList(page, limit);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
