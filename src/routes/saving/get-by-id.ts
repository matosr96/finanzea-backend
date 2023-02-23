import { RouteOptions } from "fastify";
import { getOneSaving } from "../../business-logic";

export const getOneSavingRoute: RouteOptions = {
  method: "GET",
  url: "/saving/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getOneSaving(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
