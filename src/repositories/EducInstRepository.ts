/**
 * EducInstRepository
 * @info: Responsible for everything that will affect a Educational
 * Institution's manipulation data
 */

// Import model entinty
import { EntityRepository, Repository } from 'typeorm';
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
  // Check if there's an educational institution with same name in DB
  public async findByName({
    name,
  }: FindEducationalInstitutionByNameDTO): Promise<EducInst | null> {
    const findSameName = await this.findOne({
      where: { name },
    });

    return findSameName || null;
  }

  // Check if there's an educational institution with same ein in DB
  public async findByEin({
    ein,
  }: FindEducationalInstitutionByEinDTO): Promise<EducInst | null> {
    const findSameEin = await this.findOne({ where: { ein } });

    return findSameEin || null;
  }
}

export default EducInstRepository;
