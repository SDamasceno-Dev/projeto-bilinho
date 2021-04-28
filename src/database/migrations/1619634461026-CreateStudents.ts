import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStudents1619634461026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'itr',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'birthDate',
            type: 'timestamp with time zone',
          },
          {
            name: 'mobile',
            type: 'bigint',
          },
          {
            name: 'gender',
            type: 'char',
            isNullable: false,
          },
          {
            name: 'paymentOpt',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students');
  }
}
