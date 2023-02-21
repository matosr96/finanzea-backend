import { RouteOptions } from "fastify";
import { updateCategory } from "../../business-logic";
import { Category } from "../../types";

type Params = {
  uuid: string;
};

export const updateCategoryRoute: RouteOptions = {
  method: "PUT",
  url: "/categories/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Category };
    try {
      const obj = await updateCategory(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
