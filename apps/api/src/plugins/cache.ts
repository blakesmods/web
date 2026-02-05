import { FastifyInstance } from "fastify";
import { Cacheable } from "cacheable";
import { ObjectId } from "bson";

declare module "fastify" {
  interface FastifyInstance {
    cache: Cache;
  }
}

class Cache {
  readonly cache: Cacheable;

  constructor() {
    this.cache = new Cacheable();
  }

  async setDownload(file: ObjectId, ip: string) {
    return this.cache.set(`download:${file.toString()}:${ip}`, 1, "10m");
  }

  async hasDownload(file: ObjectId, ip: string) {
    return this.cache.has(`download:${file.toString()}:${ip}`);
  }

  async setLaunch(mod: string, version: string, ip: string) {
    return this.cache.set(`launch:${mod}:${version}:${ip}`, 1, "10m");
  }

  async hasLaunch(mod: string, version: string, ip: string) {
    return this.cache.has(`launch:${mod}:${version}:${ip}`);
  }
}

export default async function (fastify: FastifyInstance) {
  fastify.decorate("cache", new Cache());
}
