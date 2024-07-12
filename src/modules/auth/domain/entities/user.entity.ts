import { Entity } from '@modules/core/domain/entities/entity'
import { ValueObject } from '@modules/core/domain/valueObject'
import { UserId } from '../valueObjects/user-id.vo'

export type CreateUserCommand = {
  name: string
  email: string
  password: string
}

export type UserProps = {
  id?: UserId
  name: string
  email: string
  password: string
  created_at?: Date
  updated_at?: Date
}

export class User extends Entity {
  name: string
  email: string
  password: string

  get entity_id(): ValueObject {
    return this.id
  }

  constructor({
    name,
    email,
    password,
    id,
    created_at,
    updated_at
  }: UserProps) {
    super(id, created_at, updated_at)
    this.name = name
    this.email = email
    this.password = password
  }

  static create(command: CreateUserCommand): User {
    const user = new User({
      name: command.name,
      email: command.email,
      password: command.password
    })
    return user
  }
  toJSON() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      id: this.id.toString(),
      created_at: this.created_at,
      updated_at: this.updated_at
    }
  }
}
