import { ChecklistModel } from '@modules/configuration/domain/models/checklist.model'
import { CheckListOutput } from '../use-cases/checklists/list-checklist/dtos/checklist-output'
import { Checklist } from '@modules/configuration/domain/entities/checklist.entity'
import { CheckistId } from '@modules/configuration/domain/valueObjects/checklist.uuid'
import { CheckListItem } from '@modules/configuration/domain/valueObjects/CheckListItem.vo'

export class CheckListMapper {
  static toOutput(checklist: ChecklistModel): CheckListOutput {
    return new CheckListOutput(checklist)
  }

  static fromModelToEntity(model: ChecklistModel): Checklist {
    const id = new CheckistId()
    return new Checklist({
      ...model,
      id,
      checkListItems: model.checkListItems.map(
        item =>
          new CheckListItem({
            description: item.description,
            score: item.score,
            isCrictical: item.isCrictical
          })
      )
    })
  }

  static fromEntityToModel(entity: Checklist): ChecklistModel {
    return new ChecklistModel({
      ...entity,
      id: entity.id.toString(),

      checkListItems: entity.checkListItems.map(item => {
        return {
          description: item.description,
          score: item.score,
          isCrictical: item.isCrictical
        }
      })
    })
  }
}
