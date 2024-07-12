import { Injectable } from '@nestjs/common'
import { ICache } from '../domain/repositories/icache'
import Redis, { Redis as RedisClient } from 'ioredis'
import { ConfigService } from '@nestjs/config'
@Injectable()
export class RedisService implements ICache {
  private client: RedisClient | null = null

  constructor(private configService: ConfigService) {
    this.initializeRedis()
  }
  async get<T>(key: string): Promise<T> {
    if (!this.client) return null
    const value = await this.client.get(key)
    if (!value) return null
    try {
      return JSON.parse(value) as T
    } catch (error) {
      return null
    }
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    if (!this.client) return
    const serializedValue = JSON.stringify(value)
    if (ttl) {
      await this.client.set(key, serializedValue, 'EX', ttl)
    } else {
      await this.client.set(key, serializedValue)
    }
  }

  private initializeRedis() {
    const redisHost = this.configService.get('REDIS_HOST')
    const redisPort = parseInt(this.configService.get('REDIS_PORT'))
    const redisPassword = this.configService.get('REDIS_PASSWORD')
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
