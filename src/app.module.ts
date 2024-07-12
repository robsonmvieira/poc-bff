import { Module } from '@nestjs/common'
import { CacheModule } from './modules/cache/cache.module'
import { DatabaseModule } from './modules/database/database.module'
import { ConfigModule } from './modules/config/config.module'
import { AuthModule } from './modules/auth/auth.module'
import { ConfigurationModule } from './modules/configuration/configuration.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    CacheModule,
    AuthModule,
    ConfigurationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
