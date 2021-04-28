/**
 * Student.Routes
 * @info: responsible for the entire route related to the educational
 * institution
 */

/**  Dependencies imports * */
import { Router } from 'express';

/**  Models and Repository import */
import StudentsRepository from '../repositories/StudentsRepository';

// Express structure
const studentDataRouter = Router();

// Instance of repositories
const studentsRepository = new StudentsRepository();

/**  Routes  * */
// List students in DB
studentDataRouter.get('/', (req, res) => {
  const students = studentsRepository.all();

  return res.json(students);
});

// Record a student in DB
studentDataRouter.post('/', (req, res) => {
  const { name, itr, birthDate, mobile, gender, paymentOpt } = req.body;

  const findSameName = studentsRepository.findByName(name);

  if (findSameName) {
    return res
      .status(400)
      .json({ message: 'This student is already in DataBase.' });
  }

  const student = studentsRepository.create(
    name,
    itr,
    birthDate,
    mobile,
    gender,
    paymentOpt,
  );

  return res.json(student);
});

export default studentDataRouter;
