import { RouteOptions } from "fastify";
import { updateExpense } from "../../business-logic";
import { Expense } from "../../types";

type Params = {
  uuid: string;
};

export const updateExpenseRoute: RouteOptions = {
  method: "PUT",
  url: "/expenses/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Expense };
    try {
      const obj = await updateExpense(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
