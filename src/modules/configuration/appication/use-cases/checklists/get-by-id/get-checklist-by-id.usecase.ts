import { Inject, Injectable } from '@nestjs/common'
import { IChecklistRepository } from '@modules/configuration/domain/repositories/checklist.contract.repository'

import { CheckListMapper } from '@modules/configuration/appication/mappers/checklist.mapper'
import { ICache } from '@modules/cache/core/domain/repositories/icache'
import { ChecklistModel } from '@modules/configuration/domain/models/checklist.model'
import { CheckListOutput } from '../list-checklist/dtos/checklist-output'

@Injectable()
export class GetCheckListByIdUseCase {
  @Inject('IChecklistRepository')
  private repo: IChecklistRepository

  @Inject('ICache') cache: ICache

  async execute(id: string): Promise<CheckListOutput> {
    const cached = await this.cache.get<ChecklistModel>(id)
    if (!cached) {
      const checkList = await this.repo.findById(id)
      await this.cache.set(id, checkList, 30)

      return CheckListMapper.toOutput(checkList)
    }

    return CheckListMapper.toOutput(cached)
  }
}
