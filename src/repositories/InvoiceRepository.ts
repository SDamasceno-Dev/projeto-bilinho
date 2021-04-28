/**
 * InvoiceRepository
 * @info: Responsible for everything that will affect an invoice's manipulation
 * data
 */

// Import model entinty
import Invoice from '../models/Invoice';

// Interfaces definition
interface CreateInvoiceDTO {
  invoiceValue: number;
  dueDate: Date;
  idEnrollment: string;
  status: string;
}

class InvoiceRepository {
  private invoices: Invoice[];

  constructor() {
    this.invoices = [];
  }

  // A method that lists all invoices in DB
  public all(): Invoice[] {
    return this.invoices;
  }

  // A method that creates all invoices of an enrollment in DB
  public create({
    invoiceValue,
    dueDate,
    idEnrollment,
    status,
  }: CreateInvoiceDTO): Invoice {
    const invoice = new Invoice(invoiceValue, dueDate, idEnrollment, status);

    this.invoices.push(invoice);

    return invoice;
  }
}

export default InvoiceRepository;
