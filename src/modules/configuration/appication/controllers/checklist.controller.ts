import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { ListCheckListUseCase } from '../use-cases/checklists/list-checklist/list-checklist.usecase'
import { CreateCheckListUseCase } from '../use-cases/checklists/create/create-checklist.usecase'
import { CreateCheckListDto } from '../use-cases/checklists/create/dto/create-check-list.dto'
import { GetCheckListByIdUseCase } from '../use-cases/checklists/get-by-id/get-checklist-by-id.usecase'

@Controller('checklists')
export class CheckListController {
  @Inject() private listCheckListUseCase: ListCheckListUseCase
  @Inject() private createCheckListUseCase: CreateCheckListUseCase
  @Inject() private getCheckListByIdUseCase: GetCheckListByIdUseCase

  @Get()
  async findAll() {
    return this.listCheckListUseCase.execute()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getCheckListByIdUseCase.execute(id)
  }

  @Post()
  async create(@Body() dto: CreateCheckListDto) {
    return this.createCheckListUseCase.execute(dto)
  }
}
