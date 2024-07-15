import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  NotEquals,
  validateSync
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
export type CreateCheckListDtoProps = {
  name: string
  type: string
  productionStage: string[]
  restrictionByRegion: string[]
  applyByRule: string
  initialDate: Date
  finalDate: Date
  initialDay: number
  finalDay: number
  useOneTime: boolean
  checkListItems: { description: string; score: number; isCrictical: boolean }[]
}

export class CreateCheckListDto {
  @ApiProperty({
    isArray: true,
    type: 'string',
    description: 'uuid list of Restriction by stages'
  })
  @IsArray()
  restrictionByRegion: string[]

  @ApiProperty({ description: 'Name of checklist' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ description: 'Type of checklist uuid' })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  type: string

  @ApiProperty({ description: 'Production stages of checklist' })
  @IsNotEmpty()
  @IsArray()
  @IsUUID('4', { each: true })
  productionStage: string[]

  @ApiProperty({ description: 'Apply by rule of checklist' })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  applyByRule: string

  @ApiProperty({ description: 'Initial date of checklist' })
  @IsNotEmpty()
  @IsDate()
  initialDate: Date

  @ApiProperty({ description: 'Final date of checklist' })
  @IsNotEmpty()
  @IsDate()
  finalDate: Date

  @ApiProperty({ description: 'Initial day of checklist' })
  @IsNotEmpty()
  @IsNumber()
  @NotEquals(0, { message: 'value of bet must be greater than 0' })
  initialDay: number

  @ApiProperty({ description: 'Final day of checklist' })
  @IsNotEmpty()
  @IsNumber()
  finalDay: number

  @ApiProperty({ isArray: true, description: 'Checklist items' })
  @IsArray()
  checkListItems: { description: string; score: number; isCrictical: boolean }[]

  @ApiProperty({ description: 'Use checklist Just one time ?' })
  @IsNotEmpty()
  @IsBoolean()
  useOneTime: boolean

  constructor(props: CreateCheckListDtoProps) {
    if (!props) return

    this.restrictionByRegion = props.restrictionByRegion
    this.name = props.name
    this.type = props.type
    this.productionStage = props.productionStage
    this.applyByRule = props.applyByRule
    this.initialDate = new Date(props.initialDate)
    this.restrictionByRegion = props.restrictionByRegion
    this.finalDate = new Date(props.finalDate)
    this.initialDay = props.initialDay
    this.finalDay = props.finalDay
    this.checkListItems = props.checkListItems
    this.useOneTime = props.useOneTime
  }
}

export class CreateCheckListDtoPropsValidator {
  static validate(props: CreateCheckListDtoProps) {
    const entity = new CreateCheckListDto(props)
    const result = validateSync(entity)

    const convertErrorsToObject = errors => {
      const formattedErrors = {}
      errors.forEach(error => {
        const { property, constraints } = error
        formattedErrors[property] = Object.values(constraints)
      })
      return formattedErrors
    }
    return convertErrorsToObject(result)
  }
}
