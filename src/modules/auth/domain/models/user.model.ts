import { Model } from '@modules/core/domain/entities/model'
import { Entity } from 'typeorm'

@Entity('models')
export class UserModel extends Model {}
