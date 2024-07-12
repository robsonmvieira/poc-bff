import { Injectable } from '@nestjs/common'
import { ICache } from '../domain/repositories/icache'
import Redis, { Redis as RedisClient } from 'ioredis'
@Injectable()
export class RedisService implements ICache {
  private client: RedisClient | null = null

  constructor() {
    this.initializeRedis()
  }
  async set(key: string, value: any, ttl?: number): Promise<void> {
    if (!this.client) return
    await this.client.set(key, value, 'EX', ttl)
  }
  async get<T>(key: string): Promise<T> {
    if (!this.client) return null
    return this.client.get(key) as T
  }

  private initializeRedis() {
    const redisHost = process.env.REDIS_HOST
    const redisPort = parseInt(process.env.REDIS_PORT)
    const redisPassword = process.env.REDIS_PASSWORD
    if (
      !redisHost ||
      isNaN(redisPort) ||
      redisPort <= 0 ||
      redisPort >= 65536
    ) {
      console.warn('Invalid Redis configuration. Redis is disabled.')
      return
    }

    this.client = new Redis({
      host: redisHost,
      port: redisPort,
      password: redisPassword
    })
    this.client.on('error', err => {
      console.error('Redis error:', err)
    })
  }
}
