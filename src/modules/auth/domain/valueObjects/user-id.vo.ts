import { UuidVO } from '@modules/core/domain/valueObject'

export class UserId extends UuidVO {
  constructor(value: string) {
    super(value)
  }
}
