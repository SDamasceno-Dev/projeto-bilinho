/**
 * @file: users.routes
 * @info: responsible for the entire route related to the user
 */

// Dependencies imports
import { request, Router } from 'express';
import multer from 'multer';

// Middlewares imports
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// Services import
import CreateUserService from '../services/CreateUserService';

// Config imports
import uploadConfig from '../config/upload';

// Express structure
const userDataRouter = Router();

const upload = multer(uploadConfig);

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

userDataRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    console.log(req.file);
    return res.json({ ok: true });
  },
);

export default userDataRouter;
