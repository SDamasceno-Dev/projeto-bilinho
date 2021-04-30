/**
 * @file: users.routes
 * @info: responsible for the entire route related to the user
 */

// Dependencies imports
import { Router } from 'express';

// Services import
import CreateUserService from '../services/CreateUserService';

// Express structure
const userDataRouter = Router();

/**  Routes  * */

// Record an educational institution in DB
userDataRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return res.json(userWithoutPassword);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default userDataRouter;
