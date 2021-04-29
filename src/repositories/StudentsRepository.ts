/**
 * @file: StudentsRepository
 * @info: Responsible for everything that will affect a student's manipulation
 * data
 */

// Dependencies import
import { EntityRepository, Repository } from 'typeorm';

// Import model entinty
import Student from '../models/Student';

// Interfaces definition
interface FindStudentByNameDTO {
  name: string;
}

interface FindStudentByItrDTO {
  itr: string;
}

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {
  // Find a student by name in DB
  public async findByName({
    name,
  }: FindStudentByNameDTO): Promise<Student | null> {
    const findSameName = await this.findOne({ where: { name } });

    return findSameName || null;
  }

  // Find a student by itr in DB
  public async findByItr({
    itr,
  }: FindStudentByItrDTO): Promise<Student | null> {
    const findSameItr = await this.findOne({ where: { itr } });

    return findSameItr || null;
  }

  //
}

export default StudentRepository;
