import { Module } from '@nestjs/common'
import { RedisService } from './core/infra/redis.service'

@Module({
  imports: [],
  controllers: [],
  providers: [{ provide: 'ICache', useClass: RedisService }]
})
export class CacheModule {}
