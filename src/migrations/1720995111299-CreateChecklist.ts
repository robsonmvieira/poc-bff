import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChecklist1720995111299 implements MigrationInterface {
    name = 'CreateChecklist1720995111299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "checklist" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP, "is_deleted" boolean DEFAULT false, "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "type" character varying NOT NULL, "productionStage" text array NOT NULL, "restrictionByRegion" text array NOT NULL, "applyByRule" character varying NOT NULL, "initialDate" date NOT NULL, "finalDate" date NOT NULL, "initialDay" integer NOT NULL, "finalDay" integer NOT NULL, "checkListItems" jsonb NOT NULL, CONSTRAINT "PK_e4b437f5107f2a9d5b744d4eb4c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "checklist"`);
    }

}
