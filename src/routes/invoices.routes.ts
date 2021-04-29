/* eslint-disable camelcase */
/**
 * @file: invoices.Routes
 * @info: responsible for the entire route related to the invoices
 */

// Dependencies imports
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

// Models and Repository import
import InvoiceRepository from '../repositories/InvoiceRepository';

// Services import
import CreateInvoiceService from '../services/CreateInvoiceService';

// Express structure
const invoiceDataRouter = Router();

/**  Routes  * */
// List invoices in DB
invoiceDataRouter.get('/', (req, res) => {
  const invoicesRepository = getCustomRepository(InvoiceRepository);
  const invoices = invoicesRepository.find();

  return res.json(invoices);
});

// Record invoices in DB
invoiceDataRouter.post('/', async (req, res) => {
  try {
    const { enrollmentValue, numberInvoices, dueDay, enrollment_id } = req.body;
    const createInvoice = new CreateInvoiceService();

    const invoice = await createInvoice.execute({
      enrollmentValue,
      numberInvoices,
      dueDay,
      enrollment_id,
    });

    return res.json(invoice);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default invoiceDataRouter;
