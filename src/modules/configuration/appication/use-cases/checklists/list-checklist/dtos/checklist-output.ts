export type CheckListOutputConstructorProps = {
  name: string
  type: string
  productionStage: string[]
  restrictionByRegion: string[]
  applyByRule: string
  initialDate: Date
  finalDate: Date
  initialDay: number
  finalDay: number

  checkListItems: { description: string; score: number; isCrictical: boolean }[]
  id?: string
  created_at?: Date
  updated_at?: Date
}

export class CheckListOutput {
  id?: string
  created_at: Date
  updated_at?: Date
  name: string
  type: string
  productionStage: string[]
  restrictionByRegion: string[]
  applyByRule: string
  initialDate: Date
  finalDate: Date
  initialDay: number
  finalDay: number

  checkListItems: { description: string; score: number; isCrictical: boolean }[]
  constructor({
    id,
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
    created_at,
    updated_at
  }: CheckListOutputConstructorProps) {
    this.id = id
    this.created_at = created_at
    this.updated_at = updated_at
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
  }
}
