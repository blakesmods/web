import { FastifyInstance } from "fastify";
import {
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";

export default async function (fastify: FastifyInstance) {
  fastify.setSerializerCompiler(serializerCompiler);
  fastify.setValidatorCompiler(validatorCompiler);
}
