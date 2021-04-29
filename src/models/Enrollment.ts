/* eslint-disable camelcase */
/**
 * @file: Enrollment
 * @info: Model structure of entity enrollment
 */

// Dependencies import
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Student from './Student';
import EducInst from './EducInst';

// Class declaration
@Entity('enrollments')
class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  totalValue: number;

  @Column('integer')
  numberInvoices: number;

  @Column('integer')
  dueDayInvoices: number;

  @Column('varchar')
  courseName: string;

  @Column('varchar')
  educinst_id: string;

  @ManyToOne(() => EducInst)
  @JoinColumn({ name: 'educinst_id' })
  educinst: EducInst;

  @Column('varchar')
  student_id: string;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Enrollment;
