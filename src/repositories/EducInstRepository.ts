/**
 * EducInstRepository
 * @info: Responsible for everything that will affect a Educational
 * Institution's manipulation data
 */

// Import model entinty
import EducInst from '../models/EducInst';

// Interfaces definition
interface CreateEducationalInstitutionDTO {
  name: string;
  ein: string;
  type: string;
}

interface FindEducationalInstitutionByNameDTO {
  name: string;
}

interface FindEducationalInstitutionByEinDTO {
  ein: string;
}

class EducInstRepository {
  private educinsts: EducInst[];

  constructor() {
    this.educinsts = [];
  }

  // A method that lists all educational institutions in DB
  public all(): EducInst[] {
    return this.educinsts;
  }

  // A method that creates an educational institutions in DB
  public create({
    name,
    ein,
    type,
  }: CreateEducationalInstitutionDTO): EducInst {
    const educinst = new EducInst({ name, ein, type });

    this.educinsts.push(educinst);

    return educinst;
  }

  // Check if there's an educational institution with same name in DB
  public findByName({
    name,
  }: FindEducationalInstitutionByNameDTO): EducInst | null {
    const findSameName = this.educinsts.find(
      educinst => educinst.name === name,
    );

    return findSameName || null;
  }

  // Check if there's an educational institution with same ein in DB
  public findByEin({
    ein,
  }: FindEducationalInstitutionByEinDTO): EducInst | null {
    const findSameEin = this.educinsts.find(educinst => educinst.ein === ein);

    return findSameEin || null;
  }
}

export default EducInstRepository;
