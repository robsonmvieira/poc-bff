import { Inject, Injectable } from '@nestjs/common'
import { IChecklistRepository } from '@modules/configuration/domain/repositories/checklist.contract.repository'
import { CheckListOutput } from './dtos/checklist-output'
import { CheckListMapper } from '@modules/configuration/appication/mappers/checklist.mapper'
import { ICache } from '@modules/cache/core/domain/repositories/icache'
import { ChecklistModel } from '@modules/configuration/domain/models/checklist.model'

@Injectable()
export class ListCheckListUseCase {
  @Inject('IChecklistRepository')
  private repo: IChecklistRepository

  @Inject('ICache') cache: ICache

  async execute(): Promise<CheckListOutput[]> {
    const cached = await this.cache.get<ChecklistModel[]>('checklists')

    if (!cached) {
      const checkListItems = await this.repo.findAll()
      await this.cache.set('checklists', checkListItems, 30)
      return checkListItems.map(checklist =>
        CheckListMapper.toOutput(checklist)
      )
    }

    return cached.map(checklist => CheckListMapper.toOutput(checklist))
  }
}
