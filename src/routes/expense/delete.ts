import { RouteOptions } from "fastify";
import { deleteExpense } from "../../business-logic";

type Params = {
  uuid: string;
};

export const deleteExpenseByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/expenses/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteExpense(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
