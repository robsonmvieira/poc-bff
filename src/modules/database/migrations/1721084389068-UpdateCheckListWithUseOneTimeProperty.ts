import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCheckListWithUseOneTimeProperty1721084389068 implements MigrationInterface {
    name = 'UpdateCheckListWithUseOneTimeProperty1721084389068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "checklist" ADD "useOneTime" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "checklist" DROP COLUMN "useOneTime"`);
    }

}
