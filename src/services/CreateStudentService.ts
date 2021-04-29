/* eslint-disable class-methods-use-this */
/**
 * @file: CreateStudentService
 * @info: Service responsible for the creation of a Student
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

// Importing Models & Repositories
import Student from '../models/Student';
import StudentRepository from '../repositories/StudentsRepository';

// Interfaces definition
interface RequestDTO {
  name: string;
  itr: string;
  birthDate: Date;
  mobile: number;
  gender: string;
  paymentOpt: string;
}

class CreateStudentService {
  public async execute({
    name,
    itr,
    birthDate,
    mobile,
    gender,
    paymentOpt,
  }: RequestDTO): Promise<Student> {
    const studentRepository = getCustomRepository(StudentRepository);

    // Checks if there are any students with the same name in the DB
    const findSameName = await studentRepository.findByName({ name });

    if (findSameName) {
      throw new Error('This student is already in DataBase.');
    }

    // Checks if there are any students with the same itr in the DB
    const findSameItr = await studentRepository.findByItr({ itr });

    if (findSameItr) {
      throw new Error('This itr is used by another student.');
    }

    const student = studentRepository.create({
      name,
      itr,
      birthDate,
      mobile,
      gender,
      paymentOpt,
    });

    await studentRepository.save(student);

    return student;
  }
}

export default CreateStudentService;
