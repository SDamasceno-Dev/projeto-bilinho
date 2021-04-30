/**
 * @file: educInsts.Routes
 * @info: responsible for the entire route related to the educational
 * institution
 */

// Dependencies imports
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

// Middlewares imports
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// Models and Repository import
import EducInstsRepository from '../repositories/EducInstRepository';

// Services import
import CreateEducInstService from '../services/CreateEducInstService';

// Express structure
const educInstDataRouter = Router();

/**  Routes  * */

// Middlewares usage
educInstDataRouter.use(ensureAuthenticated);

// List educational institutions in DB
educInstDataRouter.get('/', async (req, res) => {
  const educinstsRepository = getCustomRepository(EducInstsRepository);
  const educinsts = await educinstsRepository.find();

  return res.json(educinsts);
});

// Record an educational institution in DB
educInstDataRouter.post('/', async (req, res) => {
  const { name, ein, type } = req.body;

  const createEducInst = new CreateEducInstService();

  const educinst = await createEducInst.execute({ name, ein, type });

  return res.json(educinst);
});

export default educInstDataRouter;
