/**
 * @file: users.routes
 * @info: responsible for the entire route related to the user
 */

// Dependencies imports
import { Router } from 'express';

// Services import
import AuthenticateUserService from '../services/AuthenticateUserService';

// Express structure
const sessionDataRouter = Router();

/**  Routes  * */

// Record an educational institution in DB
sessionDataRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return res.json({ userData, token });
});

export default sessionDataRouter;
