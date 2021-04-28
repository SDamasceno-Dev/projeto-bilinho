/**
 * EducInst.Routes
 * @info: responsible for the entire route related to the educational
 * institution
 */

/**  Dependencies imports * */
import { Router } from 'express';

/**  Models and Repository import */
import EnrollmentsRepository from '../repositories/EnrollmentRepository';

// Express structure
const enrollmentDataRouter = Router();

// Instance of repositories
const enrollmentsRepository = new EnrollmentsRepository();

/**  Routes  * */
// List all enrollments in DB
enrollmentDataRouter.get('/', (req, res) => {
  const enrollments = enrollmentsRepository.all();

  return res.json(enrollments);
});

// Record an enrollment in DB
enrollmentDataRouter.post('/', (req, res) => {
  const {
    totalValue,
    numberInvoices,
    dueDayInvoices,
    courseName,
    idEducInst,
    idStudent,
  } = req.body;

  // Check enrollment data provided
  if (totalValue === '' || totalValue <= 0) {
    return res
      .status(400)
      .json({ message: 'Total value must be greater than 0' });
  }

  if (numberInvoices === '' || numberInvoices < 1) {
    return res
      .status(400)
      .json({ message: 'Number of invoices must be greater or equal than 1' });
  }

  if (!(dueDayInvoices >= 1 && dueDayInvoices <= 31)) {
    return res
      .status(400)
      .json({ message: 'Due day must be between 01 and 31' });
  }

  if (courseName.trim() === '') {
    return res.status(400).json({ message: 'Course name can not be blank' });
  }

  if (idEducInst.trim() === '') {
    return res.status(400).json({ message: 'idEducInst can not be blank' });
  }

  if (idStudent.trim() === '') {
    return res.status(400).json({ message: 'idStudent can not be blank' });
  }

  const enrollment = enrollmentsRepository.create(
    totalValue,
    numberInvoices,
    dueDayInvoices,
    courseName,
    idEducInst,
    idStudent,
  );

  return res.json(enrollment);
});

export default enrollmentDataRouter;
