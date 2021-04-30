import { Router } from 'express';
import educInstDataRouter from './educlnsts.routes';
import enrollmentDataRouter from './enrollments.routes';
import studentDataRouter from './students.routes';
import invoiceDataRouter from './invoices.routes';
import userDataRouter from './users.routes';
import sessionDataRouter from './sessions.routes';

const routes = Router();

routes.use('/educinsts', educInstDataRouter);
routes.use('/enrollments', enrollmentDataRouter);
routes.use('/students', studentDataRouter);
routes.use('/invoices', invoiceDataRouter);
routes.use('/users', userDataRouter);
routes.use('/sessions', sessionDataRouter);

export default routes;
