import { RouteOptions } from "fastify";
import { createSaving } from "../../business-logic";
import { Saving } from "../../types";

export const createSavingRoute: RouteOptions = {
  method: "POST",
  url: "/savings",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Saving;
    try {
      const obj = await createSaving(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
