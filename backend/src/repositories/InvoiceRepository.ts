/**
 * @file: InvoiceRepository
 * @info: Responsible for everything that will affect an Invoice manipulation
 * data
 */

// Dependencies import
import { EntityRepository, Repository } from 'typeorm';

// Import model entinty
import Invoice from '../models/Invoice';

// Interfaces definition

@EntityRepository(Invoice)
class InvoiceRepository extends Repository<Invoice> {}

export default InvoiceRepository;
