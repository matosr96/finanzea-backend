import { RouteOptions } from "fastify";
import { updateSaving } from "../../business-logic";
import { Saving } from "../../types";

type Params = {
  uuid: string;
};

export const updateSavingRoute: RouteOptions = {
  method: "PUT",
  url: "/savings/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Saving };
    try {
      const obj = await updateSaving(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
