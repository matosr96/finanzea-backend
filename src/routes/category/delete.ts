import { RouteOptions } from "fastify";
import { deleteCategory } from "../../business-logic";

type Params = {
  uuid: string;
};

export const deleteCategoryByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/categories/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteCategory(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
