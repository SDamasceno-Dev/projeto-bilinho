/* eslint-disable camelcase */
/**
 * @file: Student
 * @info: Model structure of entity student
 */

// Dependencies import
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Class declaration
@Entity('students') // Entity of the table students
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  itr: string;

  @Column('timestamp with time zone')
  birthDate: Date;

  @Column('bigint')
  mobile: number;

  @Column('varchar')
  gender: string;

  @Column('varchar')
  paymentOpt: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Student;
