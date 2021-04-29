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

    const invoice = invoiceRepository.create({});

    await invoiceRepository.save(invoice);

    return invoice;
  }
}

export default CreateInvoiceService;
