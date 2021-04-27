// Dependencies imports
import { Router } from 'express';

// Express structure
const studentDataRouter = Router();

// DB with no persistence
const students = [];

/**  Routes  * */
// List students in DB
studentDataRouter.get('/', (req, res) => {
  return res.json({ message: 'ok!' });
});

// record a student in DB
studentDataRouter.post('/', (req, res) => {
  const { name, itr, birthDate, mobile, gender, paymentOpt } = req.body;
});

export default studentDataRouter;
