import { Inject, Injectable } from '@nestjs/common'
import { IChecklistRepository } from '@modules/configuration/domain/repositories/checklist.contract.repository'
import {
  CreateCheckListDtoProps,
  CreateCheckListDtoPropsValidator
} from './dto/create-check-list.dto'
import { ModelOutput } from '@modules/shared/application/usecases/common/model.output'
import { Checklist } from '@modules/configuration/domain/entities/checklist.entity'
import { CheckListItem } from '@modules/configuration/domain/valueObjects/CheckListItem.vo'
import { CheckListMapper } from '@modules/configuration/appication/mappers/checklist.mapper'

@Injectable()
export class CreateCheckListUseCase {
  @Inject('IChecklistRepository')
  private repo: IChecklistRepository

  async execute(dto: CreateCheckListDtoProps): Promise<ModelOutput<void>> {
    const validate = CreateCheckListDtoPropsValidator.validate(dto)
    if (Object.keys(validate).length !== 0) {
      return new ModelOutput({
        hasError: true,
        data: null,
        error: validate
      })
    }

    const entity = Checklist.create({
      name: dto.name,
      type: dto.type,
      productionStage: dto.productionStage,
      restrictionByRegion: dto.restrictionByRegion,
      applyByRule: dto.applyByRule,
      initialDate: dto.initialDate,
      finalDate: dto.finalDate,
      initialDay: dto.initialDay,
      finalDay: dto.finalDay,
      checkListItems: dto.checkListItems.map(
        item =>
          new CheckListItem({
            description: item.description,
            score: item.score,
            isCrictical: item.isCrictical
          })
      )
    })
    // Here we should check domain business rules

    const model = CheckListMapper.fromEntityToModel(entity)

    // check if cheklist already exists and other validation
    await this.repo.save(model)

    return new ModelOutput({
      hasError: false,
      data: null,
      error: null
    })
  }
}
