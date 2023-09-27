import { getRedisInstance } from '$lib/server/redis.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const data = await request.json();
    const redis = await getRedisInstance()
    await redis.set('config', JSON.stringify(data.config))
    return new Response(null,{status: 200})
}