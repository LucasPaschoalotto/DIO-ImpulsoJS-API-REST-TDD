import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarUsuarios1659560961936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "ID",
                        type: "string",
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: "name",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type:"string",
                        isNullable: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
