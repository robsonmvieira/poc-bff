/* eslint-disable */
export default async () => {
    const t = {
        ["./modules/configuration/domain/valueObjects/CheckListItem.vo"]: await import("./modules/configuration/domain/valueObjects/CheckListItem.vo"),
        ["./modules/configuration/appication/use-cases/checklists/list-checklist/dtos/checklist-output"]: await import("./modules/configuration/appication/use-cases/checklists/list-checklist/dtos/checklist-output")
    };
    return { "@nestjs/swagger": { "models": [[import("./modules/configuration/domain/entities/checklist.entity"), { "Checklist": { name: { required: true, type: () => String }, type: { required: true, type: () => String }, productionStage: { required: true, type: () => [String] }, restrictionByRegion: { required: true, type: () => [String] }, applyByRule: { required: true, type: () => String }, initialDate: { required: true, type: () => Date }, finalDate: { required: true, type: () => Date }, initialDay: { required: true, type: () => Number }, finalDay: { required: true, type: () => Number }, isCrictical: { required: true, type: () => Boolean }, checkListItems: { required: true, type: () => [t["./modules/configuration/domain/valueObjects/CheckListItem.vo"].CheckListItem] } } }], [import("./modules/configuration/appication/use-cases/checklists/create/dto/create-check-list.dto"), { "CreateCheckListDto": { restrictionByRegion: { required: true, type: () => [String] }, name: { required: true, type: () => String }, type: { required: true, type: () => String }, productionStage: { required: true, type: () => [String] }, applyByRule: { required: true, type: () => String }, initialDate: { required: true, type: () => Date }, finalDate: { required: true, type: () => Date }, initialDay: { required: true, type: () => Number }, finalDay: { required: true, type: () => Number }, checkListItems: { required: true } }, "CreateCheckListDtoPropsValidator": {} }], [import("./modules/auth/domain/entities/user.entity"), { "User": { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } } }]], "controllers": [[import("./modules/configuration/appication/controllers/checklist.controller"), { "CheckListController": { "findAll": { type: [t["./modules/configuration/appication/use-cases/checklists/list-checklist/dtos/checklist-output"].CheckListOutput] }, "create": {}, "findOne": { type: t["./modules/configuration/appication/use-cases/checklists/list-checklist/dtos/checklist-output"].CheckListOutput } } }]] } };
};