/**
 * EnrollmentRepository
 * @info: Model structure of a student record
 */

// Dependendies import
import { v4 as uuid } from 'uuid';

// Class declaration
class Student {
  id: string;

  name: string;

  itr: string;

  birthDate: Date;

  mobile: number;

  gender: string;

  paymentOpt: string;

  constructor({
    name,
    itr,
    birthDate,
    mobile,
    gender,
    paymentOpt,
  }: Omit<Student, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.itr = itr;
    this.birthDate = birthDate;
    this.mobile = mobile;
    this.gender = gender;
    this.paymentOpt = paymentOpt;
  }
}

export default Student;
