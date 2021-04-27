import { v4 as uuid } from 'uuid';

class Student {
  id: string;

  name: string;

  itr: string;

  birthDate: Date;

  mobile: number;

  gender: string;

  paymentOpt: string;

  constructor(
    name: string,
    itr: string,
    birthDate: Date,
    mobile: number,
    gender: string,
    paymentOpt: string,
  ) {
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
