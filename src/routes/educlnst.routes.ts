/**
 * EducInst.Routes
 * @info: responsible for the entire route related to the educational
 * institution
 */

/**  Dependencies imports * */
import { Router } from 'express';

/**  Models and Repository import */
import EducInstsRepository from '../repositories/EducInstRepository';

// Express structure
const educInstDataRouter = Router();

// Instance of repositories
const educinstsrepository = new EducInstsRepository();

/**  Routes  * */

// List educational institutions in DB
educInstDataRouter.get('/', (req, res) => {
  const educinsts = educinstsrepository.all();

  return res.json(educinsts);
});

// Record an educational institution in DB
educInstDataRouter.post('/', (req, res) => {
  const { name, ein, type } = req.body;

  const findSameName = educinstsrepository.findByName(name);
  const findSameEin = educinstsrepository.findByEin(ein);

  if (findSameName) {
    return res.status(400).json({
      message: 'This educational institution name is already in DataBase.',
    });
  }

  if (findSameEin) {
    return res.status(400).json({
      message: 'This educational institution ein is already in DataBase.',
    });
  }

  const educinst = educinstsrepository.create(name, ein, type);

  return res.json(educinst);
});

export default educInstDataRouter;
