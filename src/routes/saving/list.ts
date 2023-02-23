import { RouteOptions } from "fastify";
import { savingList } from "../../business-logic";

export const listSavingsRoute: RouteOptions = {
  method: "GET",
  url: "/savings",
  handler: async (request, reply) => {
    try {
      const { query } = request;
      const { page, limit } = query as any;
      const obj = await savingList(page, limit);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
