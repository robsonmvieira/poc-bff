import Chance from 'chance'
import { Checklist } from './checklist.entity'
import { CheckListItem } from '../valueObjects/CheckListItem.vo'
describe('Checklist Entity Unit Tests', () => {
  let chance: Chance.Chance
  beforeAll(() => {
    chance = new Chance()
  })
  it('should create a new checklist using static create method', () => {
    const checklist = Checklist.create({
      name: chance.sentence(),
      type: chance.guid({ version: 4 }),
      productionStage: [chance.guid({ version: 4 })],
      restrictionByRegion: [chance.state()],
      applyByRule: chance.guid({ version: 4 }),
      initialDate: new Date(),
      finalDate: new Date(),
      initialDay: chance.integer({ min: 1, max: 30 }),
      finalDay: chance.integer({ min: 1, max: 30 }),
      checkListItems: [
        new CheckListItem({
          description: chance.sentence(),
          score: chance.integer({ min: 1, max: 5 }),
          isCrictical: chance.bool()
        })
      ]
    })
    expect(checklist).toBeTruthy()
  })
  it('should create a checklis using constructor ', () => {
    const checklist = new Checklist({
      name: chance.sentence(),
      type: chance.guid({ version: 4 }),
      productionStage: [chance.guid({ version: 4 })],
      restrictionByRegion: [chance.state()],
      applyByRule: chance.guid({ version: 4 }),
      initialDate: new Date(),
      finalDate: new Date(),
      initialDay: chance.integer({ min: 1, max: 30 }),
      finalDay: chance.integer({ min: 1, max: 30 }),
      checkListItems: [
        new CheckListItem({
          description: chance.sentence(),
          score: chance.integer({ min: 1, max: 5 }),
          isCrictical: chance.bool()
        })
      ]
    })

    expect(checklist).toBeTruthy()
  })

  it('should create a  checklist with empty checklistItems and add after using add method ', () => {
    const checklist = new Checklist({
      name: chance.sentence(),
      type: chance.guid({ version: 4 }),
      productionStage: [chance.guid({ version: 4 })],
      restrictionByRegion: [chance.state()],
      applyByRule: chance.guid({ version: 4 }),
      initialDate: new Date(),
      finalDate: new Date(),
      initialDay: chance.integer({ min: 1, max: 30 }),
      finalDay: chance.integer({ min: 1, max: 30 }),
      checkListItems: []
    })
    const checkListItem = new CheckListItem({
      description: chance.sentence(),
      score: chance.integer({ min: 1, max: 5 }),
      isCrictical: chance.bool()
    })
    checklist.addCheckListItem(checkListItem)
    expect(checklist.checkListItems).toContain(checkListItem)
    expect(checklist.checkListItems.length).toBe(1)
  })

  it('should create a  checklist with empty checklistItems and remove after using removeChecklistItem method ', () => {
    const checklist = new Checklist({
      name: chance.sentence(),
      type: chance.guid({ version: 4 }),
      productionStage: [chance.guid({ version: 4 })],
      restrictionByRegion: [chance.state()],
      applyByRule: chance.guid({ version: 4 }),
      initialDate: new Date(),
      finalDate: new Date(),
      initialDay: chance.integer({ min: 1, max: 30 }),
      finalDay: chance.integer({ min: 1, max: 30 }),
      checkListItems: []
    })
    const checkListItem = new CheckListItem({
      description: chance.sentence(),
      score: chance.integer({ min: 1, max: 5 }),
      isCrictical: chance.bool()
    })
    checklist.addCheckListItem(checkListItem)
    checklist.removeCheckListItem(checkListItem)
    expect(checklist.checkListItems).not.toContain(checkListItem)
    expect(checklist.checkListItems.length).toBe(0)
  })

  it('should not be able add checklist with already exists checklist item', () => {
    const checklist = new Checklist({
      name: chance.sentence(),
      type: chance.guid({ version: 4 }),
      productionStage: [chance.guid({ version: 4 })],
      restrictionByRegion: [chance.state()],
      applyByRule: chance.guid({ version: 4 }),
      initialDate: new Date(),
      finalDate: new Date(),
      initialDay: chance.integer({ min: 1, max: 30 }),
      finalDay: chance.integer({ min: 1, max: 30 }),
      checkListItems: []
    })
    const checkListItem = new CheckListItem({
      description: chance.sentence(),
      score: chance.integer({ min: 1, max: 5 }),
      isCrictical: chance.bool()
    })
    checklist.addCheckListItem(checkListItem)
    checklist.addCheckListItem(checkListItem)
    expect(checklist.checkListItems.length).toBe(1)
  })
})
