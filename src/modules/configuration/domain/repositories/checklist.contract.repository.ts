import { IRepository } from '@modules/core/domain/repositories/irepository'
import { ChecklistModel } from '../models/checklist.model'

export interface IChecklistRepository extends IRepository<ChecklistModel> {}
