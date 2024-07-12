import { UuidVO } from '@modules/core/domain/valueObject'

export class CheckistId extends UuidVO {
  constructor(value?: string) {
    super(value)
  }
}
