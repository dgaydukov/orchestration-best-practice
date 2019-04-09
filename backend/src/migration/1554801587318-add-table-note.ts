import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class addTableNotes1554801587318 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'note',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'desc',
                    type: 'varchar',
                },
                {
                    name: 'date',
                    type: 'date',
                },
            ],
        }));
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('note');
    }

}
