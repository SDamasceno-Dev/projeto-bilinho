/* eslint-disable camelcase */
/**
 * @file: Invoice
 * @info: Model structure of entity invoice
 */

// Dependencies import
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Enrollment from './Enrollment';

// Class declaration
@Entity('invoices')
class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  invoiceValue: number;

  @Column('timestamp with time zone')
  dueDate: Date;

  @Column('varchar')
  enrollment_id: string;

  @ManyToOne(() => Enrollment)
  @JoinColumn({ name: 'enrollment_id' })
  enrollment: Enrollment;

  @Column('varchar')
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Invoice;
