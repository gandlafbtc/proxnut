import type { RedisClientType } from '@redis/client';
import { createClient } from 'redis';
import { REDIS_HOST } from "$env/static/private";

let client: undefined | RedisClientType

export const getRedisInstance = async () => {
    if (!client) {
        client = createClient({socket:{host: REDIS_HOST }});
        client.on('error', err => console.log('Redis Client Error', err));
        await client.connect();
    }
    return client
}