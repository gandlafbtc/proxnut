import { getRedisInstance } from '$lib/server/redis';

export async function load() {
        const redis = await getRedisInstance()
        let configStr = await redis.get('config');
        const tokens = await redis.lRange('tokens',0,-1);
        if (!configStr) {
         configStr = '{}'
      }
      
        const config = JSON.parse(configStr)
           
        return {
            config,
            tokens
        }; 
}