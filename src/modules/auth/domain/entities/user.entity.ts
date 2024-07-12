import { Entity } from '@modules/core/domain/entities/entity'
import { ValueObject } from '@modules/core/domain/valueObject'
import { UserId } from '../valueObjects/user-id.vo'

export type CreateUserCommand = {
  name: string
  email: string
  password: string
}

export type UserProps = {
  id: UserId
  name: string
  email: string
  password: string
  created_at: Date
  updated_at?: Date
}

export class User extends Entity {
  get entity_id(): ValueObject {
    return this.id
  }

  constructor(props: UserProps) {}
  toJSON() {
    throw new Error('Method not implemented.')
  }
}
