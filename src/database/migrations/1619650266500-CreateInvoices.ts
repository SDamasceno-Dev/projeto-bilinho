/* eslint-disable class-methods-use-this */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateInvoices1619646905936 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'invoices',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'invoiceValue',
            type: 'decimal',
          },
          {
            name: 'dueDate',
            type: 'timestamp',
            isUnique: true,
          },
          {
            name: 'enrollment_id',
            type: 'uuid',
          },
          {
            name: 'status',
            type: 'varchar',
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
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'invoices',
      new TableForeignKey({
        name: 'InvoiceEnrollment',
        columnNames: ['enrollment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'enrollments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('invoices', 'InvoiceEnrollment');
    await queryRunner.dropTable('invoices');
  }
}
