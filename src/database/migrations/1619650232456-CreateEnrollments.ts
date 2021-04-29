/* eslint-disable class-methods-use-this */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateEnrollments1619633270620
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'enrollments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'totalValue',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'numberInvoices',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'dueDayInvoices',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'courseName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'educinst_id',
            type: 'uuid',
          },
          {
            name: 'student_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'enrollments',
      new TableForeignKey({
        name: 'EnrollmentsEducInst',
        columnNames: ['educinst_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'educinsts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'enrollments',
      new TableForeignKey({
        name: 'EnrollmentsStudent',
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'students',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('enrollments', 'EnrollmentsStudent');
    await queryRunner.dropForeignKey('enrollments', 'EnrollmentsEducInst');
    await queryRunner.dropTable('enrollments');
  }
}
