import { RouteOptions } from "fastify";
import { createCategory } from "../../business-logic";
import { Category } from "../../types";

export const createCategoryRoute: RouteOptions = {
  method: "POST",
  url: "/categories",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Category;
    try {
      const obj = await createCategory(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
