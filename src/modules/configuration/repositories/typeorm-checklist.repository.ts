import { BaseRepository } from '@modules/core/infra/repositories/repository'
import { ChecklistModel } from '../domain/models/checklist.model'
import { IChecklistRepository } from '../domain/repositories/checklist.contract.repository'

export class TypeOrmCheckListRepository
  extends BaseRepository<ChecklistModel>
  implements IChecklistRepository {}
