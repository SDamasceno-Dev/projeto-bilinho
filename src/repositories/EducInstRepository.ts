/**
 * @file: EducInstRepository
 * @info: Responsible for everything that will affect a Educational
 * Institution's manipulation data
 */

// Dependencies import
import { EntityRepository, Repository } from 'typeorm';

// Import model entinty
import EducInst from '../models/EducInst';

// Interfaces definition
interface FindEducationalInstitutionByNameDTO {
  name: string;
}

interface FindEducationalInstitutionByEinDTO {
  ein: string;
}

@EntityRepository(EducInst)
class EducInstRepository extends Repository<EducInst> {
  // Find an educational institution by name in DB
  public async findByName({
    name,
  }: FindEducationalInstitutionByNameDTO): Promise<EducInst | null> {
    const findSameName = await this.findOne({
      where: { name },
    });

    return findSameName || null;
  }

  // Find an educational institution by ein in DB
  public async findByEin({
    ein,
  }: FindEducationalInstitutionByEinDTO): Promise<EducInst | null> {
    const findSameEin = await this.findOne({ where: { ein } });

    return findSameEin || null;
  }
}

export default EducInstRepository;
