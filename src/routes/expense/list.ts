import { RouteOptions } from "fastify";
import { expensesList } from "../../business-logic";

export const expensesListRoute: RouteOptions = {
  method: "GET",
  url: "/expenses",
  handler: async (request, reply) => {
    try {
      const { query } = request;
      const { page, limit } = query as any;
      const obj = await expensesList(page, limit);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
