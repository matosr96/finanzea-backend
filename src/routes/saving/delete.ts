import { RouteOptions } from "fastify";
import { deleteSaving } from "../../business-logic";

type Params = {
  uuid: string;
};

export const deleteSavingRoute: RouteOptions = {
  method: "DELETE",
  url: "/savings/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteSaving(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
