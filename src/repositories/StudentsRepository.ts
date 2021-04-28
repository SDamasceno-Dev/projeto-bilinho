/**
 * StudentsRepository
 * @info: Responsible for everything that will affect a student's manipulation
 * data
 */

// Import model entinty
import { EntityRepository, Repository } from 'typeorm';
import Student from '../models/Student';

// Interfaces definition
interface FindStudentByNameDTO {
  name: string;
}

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {
  // Check if there's a student with same name in DB
  public async findByName({
    name,
  }: FindStudentByNameDTO): Promise<Student | null> {
    const findSameName = await this.findOne({ where: { name } });

    return findSameName || null;
  }
}

export default StudentRepository;
