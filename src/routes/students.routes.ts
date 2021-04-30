/**
 * @file: students.routes
 * @info: responsible for the entire route related to the student
 */

// Dependencies imports
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

// Middlewares imports
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// Models and Repository import
import StudentsRepository from '../repositories/StudentsRepository';

// Services import
import CreateStudentService from '../services/CreateStudentService';

// Express structure
const studentDataRouter = Router();

/**  Routes  * */

// Middlewares usage
studentDataRouter.use(ensureAuthenticated);

// List students in DB
studentDataRouter.get('/', async (req, res) => {
  const studentsRepository = getCustomRepository(StudentsRepository);
  const students = await studentsRepository.find();

  return res.json(students);
});

// Record a student in DB
studentDataRouter.post('/', async (req, res) => {
  const { name, itr, birthDate, mobile, gender, paymentOpt } = req.body;

  const createStudent = new CreateStudentService();

  const student = await createStudent.execute({
    name,
    itr,
    birthDate,
    mobile,
    gender,
    paymentOpt,
  });

  return res.json(student);
});

export default studentDataRouter;
