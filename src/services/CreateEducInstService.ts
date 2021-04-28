/* eslint-disable class-methods-use-this */
/**
 * @Service: CreateEducInstService
 * @info: Service responsible for the creation of an educational institution
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

/**  Importing Models & Repositories * */
import EducInst from '../models/EducInst';
import EducInstRepository from '../repositories/EducInstRepository';

// Interfaces definition
interface RequestDTO {
  name: string;
  ein: string;
  type: string;
}

class CreateEducInstService {
  public async execute({ name, ein, type }: RequestDTO): Promise<EducInst> {
    const educinstRepository = getCustomRepository(EducInstRepository);

    const findSameName = await educinstRepository.findByName({ name });
    const findSameEin = await educinstRepository.findByEin({ ein });

    if (findSameName) {
      throw Error('This educational institution name is already in DataBase.');
    }

    if (findSameEin) {
      throw Error('This educational institution ein is already in DataBase.');
    }

    const educinst = educinstRepository.create({
      name,
      ein,
      type,
    });

    await educinstRepository.save(educinst);

    return educinst;
  }
}

export default CreateEducInstService;
