import { RouteOptions } from "fastify";
import { createExpense } from "../../business-logic";
import { Expense } from "../../types";

export const createExpenseRoute: RouteOptions = {
  method: "POST",
  url: "/expenses",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Expense;
    try {
      const obj = await createExpense(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
