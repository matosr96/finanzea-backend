import { RouteOptions } from "fastify";
import { getOneExpense } from "../../business-logic";

export const getOneExpenseRoute: RouteOptions = {
  method: "GET",
  url: "/expense/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getOneExpense(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
