import { RouteOptions } from "fastify";
import { getOneCategory } from "../../business-logic";

export const getOneCategoryRoute: RouteOptions = {
  method: "GET",
  url: "/category/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getOneCategory(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
