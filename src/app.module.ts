import { Module } from '@nestjs/common'
import { CacheModule } from './modules/cache/cache.module'
import { DatabaseModule } from './modules/database/database.module'
import { ConfigModule } from './modules/config/config.module'
import { ConfigurationModule } from './modules/configuration/configuration.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CacheModule,
    ConfigurationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
