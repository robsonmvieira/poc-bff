import { ValueObject } from '@modules/core/domain/valueObject'

type CheckListItemProps = {
  description: string
  score: number
  isCrictical: boolean
}

export class CheckListItem extends ValueObject {
  description: string
  score: number
  isCrictical: boolean

  constructor({ description, score, isCrictical }: CheckListItemProps) {
    super()
    this.description = description
    this.score = score
    this.isCrictical = isCrictical
  }
}
