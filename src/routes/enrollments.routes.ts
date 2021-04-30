/* eslint-disable camelcase */
/**
 * @file: enrollments.routes
 * @info: responsible for the entire route related to the enrollment
 */

//  Dependencies imports
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

// Middlewares imports
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// Models and Repository import
import EnrollmentRepository from '../repositories/EnrollmentRepository';

// Services import
import CreateEnrollmentService from '../services/CreateEnrollmentService';

// Express structure
const enrollmentDataRouter = Router();

/**  Routes  * */

// Middlewares usage
enrollmentDataRouter.use(ensureAuthenticated);

// List all enrollments in DB
enrollmentDataRouter.get('/', async (req, res) => {
  const enrollmentsRepository = getCustomRepository(EnrollmentRepository);
  const enrollments = await enrollmentsRepository.find();

  return res.json(enrollments);
});

// Record an enrollment in DB
enrollmentDataRouter.post('/', async (req, res) => {
  try {
    const {
      totalValue,
      numberInvoices,
      dueDayInvoices,
      courseName,
      educinst_id,
      student_id,
    } = req.body;

    const createEnrollment = new CreateEnrollmentService();

    const enrollment = await createEnrollment.execute({
      totalValue,
      numberInvoices,
      dueDayInvoices,
      courseName,
      educinst_id,
      student_id,
    });

    return res.json(enrollment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default enrollmentDataRouter;
