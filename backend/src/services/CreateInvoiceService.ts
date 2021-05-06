/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/**
 * @file: CreateInvoiceService
 * @info: Service responsible for the creation of an invoice
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';
import { isAfter, getYear, getMonth, add, isWeekend, getDay } from 'date-fns';

// Importing Models & Repositories
import Invoice from '../models/Invoice';
import InvoiceRepository from '../repositories/InvoiceRepository';

// Interfaces definition
interface RequestDTO {
  enrollmentValue: number;
  numberInvoices: number;
  dueDay: Date;
  enrollment_id: string;
}
class CreateInvoiceService {
  public async execute({
    enrollmentValue,
    numberInvoices,
    dueDay,
    enrollment_id,
  }: RequestDTO): Promise<Invoice> {
    const invoiceRepository = getCustomRepository(InvoiceRepository);

    // Defines invoice value
    const invoiceValue = (enrollmentValue / numberInvoices).toFixed(2);

    const dateBase = new Date(
      getYear(new Date()),
      getMonth(new Date()),
      dueDay,
    );

    // Verify the date
    const dateIsAfter = isAfter(dateBase, new Date());
    let dueDateTemp = dateBase;
    let dueDate;
    if (!dateIsAfter) {
      dueDateTemp = add(dateBase, { months: 1 });
    }

    // Define status
    const status = 'ABERTA';

    // Create all invoices
    for (let i = 0; i < numberInvoices; i += 1) {
      dueDate = add(dueDateTemp, { months: i });
      const isWeekendDay = isWeekend(dueDate);

      // Set DueDay to the next business day
      if (isWeekendDay) {
        if (getDay(dueDate) === 6) {
          dueDate = add(dueDate, { days: 2 });
        } else {
          dueDate = add(dueDate, { days: 1 });
        }
      }

      const invoice = invoiceRepository.create({
        invoiceValue,
        dueDate,
        enrollment_id,
        status,
      });
      await invoiceRepository.save(invoice);
      return invoice;
    }
  }
}

export default CreateInvoiceService;
