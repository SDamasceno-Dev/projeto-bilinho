// Dependencies imports
import { Router } from 'express';
import { v4 as uuid } from 'uuid';

// Express structure
const studentDataRouter = Router();

// DB with no persistence
interface Student {
  id: string;
  name: string;
  itr: string;
  birthDate: Date;
  mobile: number;
  gender: string;
  paymentOpt: string;
}
const students: Student[] = [];

/**  Routes  * */
// List students in DB
studentDataRouter.get('/', (req, res) => {
  return res.json(students);
});

// record a student in DB
studentDataRouter.post('/', (req, res) => {
  const { name, itr, birthDate, mobile, gender, paymentOpt } = req.body;

  const findSameName = students.find(student => student.name === name);

  if (findSameName) {
    return res
      .status(400)
      .json({ message: 'This student is already in DataBase.' });
  }
  const student = {
    id: uuid(),
    name,
    itr,
    birthDate,
    mobile,
    gender,
    paymentOpt,
  };
  students.push(student);

  return res.json(student);
});

export default studentDataRouter;
