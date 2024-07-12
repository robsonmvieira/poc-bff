import { Model } from '@modules/core/domain/entities/model'
import { Column, Entity } from 'typeorm'

export type CheckListProps = {
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

@Entity({ name: 'checklist' })
export class ChecklistModel extends Model {
  @Column()
  name: string
  @Column()
  type: string
  @Column('text', { array: true })
  productionStage: string[]
  @Column('text', { array: true })
  restrictionByRegion: string[]
  @Column()
  applyByRule: string
  @Column({ type: 'date' })
  initialDate: Date
  @Column({ type: 'date' })
  finalDate: Date
  @Column({ type: 'int' })
  initialDay: number
  @Column({ type: 'int' })
  finalDay: number

  @Column({ type: 'jsonb' })
  checkListItems: { description: string; score: number; isCrictical: boolean }[]

  constructor(props: CheckListProps) {
    super(props?.id, props?.created_at, props?.updated_at)
    this.name = props?.name
    this.type = props?.type
    this.productionStage = props?.productionStage
    this.restrictionByRegion = props?.restrictionByRegion
    this.applyByRule = props?.applyByRule
    this.initialDate = props?.initialDate
    this.finalDate = props?.finalDate
    this.initialDay = props?.initialDay
    this.finalDay = props?.finalDay
    this.checkListItems = props?.checkListItems
  }
}
