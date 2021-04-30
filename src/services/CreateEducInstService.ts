/* eslint-disable class-methods-use-this */
/**
 * @file: CreateEducInstService
 * @info: Service responsible for the creation of an educational institution
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

// Importing Models & Repositories
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

    // Check if name is blank
    if (name.trim() === '') {
      throw new Error(`Educational institution's name can't be blank`);
    }

    // Check if there's other educational institute with same name
    const findSameName = await educinstRepository.findByName({ name });

    if (findSameName) {
      throw Error('This educational institution name is already in DataBase.');
    }

    // Check if ein is numeric
    if (!/^\d+$/.test(ein)) {
      throw new Error(`Educational institution's EIN must use only numbers`);
    }

    // Check if there's other educational institute with same ein
    const findSameEin = await educinstRepository.findByEin({ ein });

    if (findSameEin) {
      throw Error('This educational institution EIN is already in DataBase.');
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
