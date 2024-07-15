import { Entity } from '@modules/core/domain/entities/entity'
import { CheckListItem } from '../valueObjects/CheckListItem.vo'
import { ValueObject } from '@modules/core/domain/valueObject'
import { CheckistId } from '../valueObjects/checklist.uuid'
export type CreateChecklistCommand = {
  name: string
  type: string
  productionStage: string[]
  restrictionByRegion: string[]
  applyByRule: string
  initialDate: Date
  finalDate: Date
  initialDay: number
  finalDay: number
  checkListItems: CheckListItem[]
  useOneTime: boolean
}

export type CheckListProps = {
  id?: CheckistId
  name: string
  type: string
  productionStage: string[]
  restrictionByRegion: string[]
  applyByRule: string
  initialDate: Date
  finalDate: Date
  initialDay: number
  finalDay: number
  checkListItems: CheckListItem[]
  created_at?: Date
  updated_at?: Date
  useOneTime: boolean
}

export class Checklist extends Entity {
  name: string
  type: string
  productionStage: string[]
  restrictionByRegion: string[]
  applyByRule: string
  initialDate: Date
  finalDate: Date
  initialDay: number
  finalDay: number
  isCrictical: boolean
  checkListItems: CheckListItem[]
  useOneTime: boolean

  constructor({
    name,
    type,
    productionStage,
    restrictionByRegion,
    applyByRule,
    initialDate,
    finalDate,
    initialDay,
    finalDay,
    checkListItems,
    id,
    created_at,
    updated_at,
    useOneTime
  }: CheckListProps) {
    super(id, created_at, updated_at)
    this.name = name
    this.type = type
    this.productionStage = productionStage
    this.restrictionByRegion = restrictionByRegion
    this.applyByRule = applyByRule
    this.initialDate = initialDate
    this.finalDate = finalDate
    this.initialDay = initialDay
    this.finalDay = finalDay
    this.checkListItems = checkListItems
    this.useOneTime = useOneTime
  }

  static create(command: CreateChecklistCommand): Checklist {
    const checklist = new Checklist({
      name: command.name,
      type: command.type,
      productionStage: command.productionStage,
      restrictionByRegion: command.restrictionByRegion,
      applyByRule: command.applyByRule,
      initialDate: command.initialDate,
      finalDate: command.finalDate,
      initialDay: command.initialDay,
      finalDay: command.finalDay,
      checkListItems: command.checkListItems,
      useOneTime: command.useOneTime
    })
    return checklist
  }

  addCheckListItem(item: CheckListItem) {
    // check if checklist item already exists
    if (this.checkListItems.includes(item)) return
    this.checkListItems.push(item)
  }

  removeCheckListItem(item: CheckListItem) {
    this.checkListItems = this.checkListItems.filter(
      checkListItem =>
        checkListItem.description.toLocaleLowerCase() !==
        item.description.toLocaleLowerCase()
    )
  }
  get entity_id(): ValueObject {
    return this.id
  }
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      productionStage: this.productionStage,
      restrictionByRegion: this.restrictionByRegion,
      applyByRule: this.applyByRule,
      initialDate: this.initialDate,
      finalDate: this.finalDate,
      initialDay: this.initialDay,
      finalDay: this.finalDay,
      isCrictical: this.isCrictical,
      checkListItems: this.checkListItems,
      id: this.id.toString(),
      created_at: this.created_at,
      updated_at: this.updated_at
    }
  }
}
