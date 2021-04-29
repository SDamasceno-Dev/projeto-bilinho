/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/**
 * @file: CreateInvoiceService
 * @info: Service responsible for the creation of an invoice
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

// Importing Models & Repositories
import Invoice from '../models/Invoice';
import InvoiceRepository from '../repositories/InvoiceRepository';

// Interfaces definition
interface RequestDTO {
  enrollmentValue: number;
  numberInvoices: number;
  dueDay: Date;
  enrollment_id: string;
  status: string;
}
class CreateInvoiceService {
  public async execute({
    enrollmentValue,
    numberInvoices,
    dueDay,
    enrollment_id,
  }: RequestDTO): Promise<Invoice> {
    const invoiceRepository = getCustomRepository(InvoiceRepository);

    const invoiceValue = (enrollmentValue / numberInvoices).toFixed(2);

    // Create all invoices
    for (let i = 0; i < numberInvoices; i += 1) {
      const invoice = invoiceRepository.create({ invoiceValue });
      // eslint-disable-next-line no-await-in-loop
      await invoiceRepository.save(invoice);
    }

    return invoice;
  }
}

export default CreateInvoiceService;
