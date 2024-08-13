import { ipAddress, next } from '@vercel/edge'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.VERSEL_REDIS_URL,
    token: process.env.VERSEL_REDIS_TOKEN
})

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '20 s'),
})

export const config = {
    matcher: '/api/hello',
}

export default async function middleware(request: Request) {
    const ip = ipAddress(request) || '127.0.0.1'
    console.log('middleware is called');
    const { success, pending, limit, reset, remaining } = await ratelimit.limit(
        ip
    )
    return success ? next() : Response.redirect(new URL('/blocked.html', request.url))
}
