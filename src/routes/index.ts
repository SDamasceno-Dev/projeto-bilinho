import { Router } from 'express';
import educInstDataRouter from './educlnst.routes';
import enrollmentDataRouter from './enrollment.routes';
import studentDataRouter from './student.routes';
import invoiceDataRouter from './invoice.routes';

const routes = Router();

routes.use('/educinst', educInstDataRouter);
routes.use('/enrollment', enrollmentDataRouter);
routes.use('/student', studentDataRouter);
routes.use('/invoice', invoiceDataRouter);

export default routes;
