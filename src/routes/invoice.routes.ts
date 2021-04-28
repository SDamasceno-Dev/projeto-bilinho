/**
 * Student.Routes
 * @info: responsible for the entire route related to the educational
 * institution
 */

/**  Dependencies imports * */
import { Router } from 'express';

/**  Models and Repository import */
import InvoiceRepository from '../repositories/InvoiceRepository';

// Express structure
const invoiceDataRouter = Router();

// Instance of repositories
const invoicesRepository = new InvoiceRepository();

/**  Routes  * */
// List invoices in DB
invoiceDataRouter.get('/', (req, res) => {
  const invoices = invoicesRepository.all();

  return res.json(invoices);
});

// Record invoices in DB
invoiceDataRouter.post('/', (req, res) => {});

export default invoiceDataRouter;
