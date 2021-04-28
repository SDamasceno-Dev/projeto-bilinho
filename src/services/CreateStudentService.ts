/* eslint-disable class-methods-use-this */
/**
 * @Service: CreateEducInstService
 * @info: Service responsible for the creation of an educational institution
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

/**  Importing Models & Repositories * */
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

    const findSameName = await studentRepository.findByName({ name });

    if (findSameName) {
      throw Error('This student is already in DataBase.');
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
