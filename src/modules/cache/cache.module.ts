import { Module } from '@nestjs/common'
import { RedisService } from './core/infra/redis.service'
import { ConfigModule } from '@modules/config/config.module'

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [{ provide: 'ICache', useClass: RedisService }],
  exports: ['ICache']
})
export class CacheModule {}
