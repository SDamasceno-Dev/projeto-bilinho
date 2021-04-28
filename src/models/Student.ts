/**
 * @file: EnrollmentRepository
 * @info: Model structure of entity student
 */

// Dependendies import
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Student;
