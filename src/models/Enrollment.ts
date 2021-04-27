import { v4 as uuid } from 'uuid';

class Enrollment {
  id: string;

  totalValue: number;

  numberInvoices: number;

  dueDateInvoices: number;

  courseName: string;

  idEducInst: string;

  idStudent: string;

  constructor(
    totalValue: number,
    numberInvoices: number,
    dueDateInvoices: number,
    courseName: string,
    idEducInst: string,
    idStudent: string,
  ) {
    this.id = uuid();
    this.totalValue = totalValue;
    this.numberInvoices = numberInvoices;
    this.dueDateInvoices = dueDateInvoices;
    this.courseName = courseName;
    this.idEducInst = idEducInst;
    this.idStudent = idStudent;
  }
}

export default Enrollment;
