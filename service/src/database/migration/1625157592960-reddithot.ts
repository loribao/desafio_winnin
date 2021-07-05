import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class reddithot1625157592960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'HotPost',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isUnique: true
                },
                {
                    name: 'titulo',
                    type: 'varchar',
                    isNullable: false
                }, {
                    name: 'timestamp',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'autor',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'dominio',
                    type: 'varchar',
                    isNullable: true

                },
                {
                    name: 'ups',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'num_comentarios',
                    type: 'integer',
                    isNullable: false,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('HotPost');
    }
}
