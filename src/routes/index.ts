import { Router } from 'express';
import educInstDataRouter from './educlnst.routes';
import enrollmentDataRouter from './enrollment.routes';
import studentDataRouter from './student.routes';

const routes = Router();

routes.use('/educInst', educInstDataRouter);
routes.use('/enrollment', enrollmentDataRouter);
routes.use('/student', studentDataRouter);

export default routes;
