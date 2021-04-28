/**
 * InvoiceRepository
 * @info: Model structure of an invoice record
 */

// Dependendies import
import { v4 as uuid } from 'uuid';

// Class declaration
class Invoice {
  id: string;

  invoiceValue: number;

  dueDate: Date;

  idEnrollment: string;

  status: string;

  constructor({
    invoiceValue,
    dueDate,
    idEnrollment,
    status,
  }: Omit<Invoice, 'id'>) {
    this.id = uuid();
    this.invoiceValue = invoiceValue;
    this.dueDate = dueDate;
    this.idEnrollment = idEnrollment;
    this.status = status;
  }
}

export default Invoice;
