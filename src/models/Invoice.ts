import { v4 as uuid } from 'uuid';

class Invoice {
  id: string;

  invoiceValue: number;

  dueDate: Date;

  idEnrollment: string;

  status: string;

  constructor(
    invoiceValue: number,
    dueDate: Date,
    idEnrollment: string,
    status: string,
  ) {
    this.id = uuid();
    this.invoiceValue = invoiceValue;
    this.dueDate = dueDate;
    this.idEnrollment = idEnrollment;
    this.status = status;
  }
}

export default Invoice;
