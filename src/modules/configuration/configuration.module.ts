import { Module } from '@nestjs/common'
import { CheckListController } from './appication/controllers/checklist.controller'

import { CheckListRepository } from './repositories/checklist.repository'
import { DataSource } from 'typeorm'
import { ChecklistModel } from './domain/models/checklist.model'
import { DatabaseModule } from '@modules/database/database.module'
import { ListCheckListUseCase } from './appication/use-cases/checklists/list-checklist/list-checklist.usecase'
import { CreateCheckListUseCase } from './appication/use-cases/checklists/create/create-checklist.usecase'
import { CacheModule } from '@modules/cache/cache.module'
import { GetCheckListByIdUseCase } from './appication/use-cases/checklists/get-by-id/get-checklist-by-id.usecase'

@Module({
  controllers: [CheckListController],
  imports: [DatabaseModule, CacheModule],
  providers: [
    {
      provide: 'IChecklistRepository',
      useFactory: (data: DataSource) =>
        new CheckListRepository(data.getRepository(ChecklistModel)),
      inject: ['dbConnectionTypeOrm']
    },
    ListCheckListUseCase,
    CreateCheckListUseCase,
    GetCheckListByIdUseCase
  ]
})
export class ConfigurationModule {}
