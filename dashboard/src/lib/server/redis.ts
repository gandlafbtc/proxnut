import type { RedisClientType } from '@redis/client';
import { createClient } from 'redis';

let client: undefined | RedisClientType

export const getRedisInstance = async () => {
    if (!client) {
        client = createClient({socket:{host: 'localhost'}});
        client.on('error', err => console.log('Redis Client Error', err));
        await client.connect();
    }
    return client
}



// 

// await client.set('key', 'value');
// const value = await client.get('key');
// await client.disconnect();