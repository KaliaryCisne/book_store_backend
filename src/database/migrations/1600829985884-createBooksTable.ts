import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createBooksTable1600829985884 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'books',
            columns: [ 
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: 'name',
                    type: 'varchar',
                    
                },
                {
                    name: 'description',
                    type: 'varchar',
                    
                },
                {
                    name: 'author',
                    type: 'varchar',
                },
                {
                    name: 'gender',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'float',
                },
                {
                    name: 'year',
                    type: 'int',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }
}
