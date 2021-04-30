/**
 * Server
 * @info: All server configuration and connectios
 */

// Dependencies imports
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';

// Errors imports
import AppError from './errors/AppError';

// Config imports
import uploadConfig from './config/upload';

// DB Connection
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333, () => {
  console.log('🏁 Server started on port 3333');
});
