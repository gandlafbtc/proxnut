import type { RedisClientType } from "@redis/client";
import { createClient } from "redis";
import { Config } from "./types";

let client: undefined | RedisClientType;

export const getRedisInstance = async () => {
  if (!client) {
    client = createClient({ socket: { host: "localhost" } });
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
  }
  return client;
};

export const getConfig = async (): Promise<Config> => {
  const redis = await getRedisInstance();
  let configStr = await redis.get("config");
  if (!configStr) {
    configStr = "{}";
  }
  const config: Config = JSON.parse(configStr);
  return config;
};
