/* eslint-disable class-methods-use-this */
/**
 * @file: CreateStudentService
 * @info: Service responsible for the creation of a Student
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

// Errors imports
import AppError from '../errors/AppError';

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

    // Check if student name is blank
    if (name.trim() === '') {
      throw new AppError(`Student's name can't be blank`);
    }

    // Check if there are any students with the same name in the DB
    const findSameName = await studentRepository.findByName({ name });

    if (findSameName) {
      throw new AppError('This student is already in DataBase.');
    }

    // Check if student ITR is blank
    if (itr.trim() === '') {
      throw new AppError(`Student's ITR can't be blank`);
    }

    // Check if student itr is only numeric
    if (!/^\d+$/.test(itr)) {
      throw new AppError(`Student's ITR must use only numbers`);
    }

    // Check if there are any students with the same itr in the DB
    const findSameItr = await studentRepository.findByItr({ itr });

    if (findSameItr) {
      throw new AppError('This itr is used by another student.');
    }

    // Check if student gender is blank
    if (gender.trim() === '') {
      throw new AppError(`Student's gender can't be blank`);
    }

    // Check if student gender is M or F
    if (!(gender.toUpperCase() === 'F' || gender.toUpperCase() === 'M')) {
      throw new AppError(`Student's gender must be M or F`);
    }

    // Check if student payment option is blank
    if (paymentOpt.trim() === '') {
      throw new AppError(`Student's payment option can't be blank`);
    }

    // Check if student payment option is blank
    if (
      !(
        paymentOpt.toUpperCase() === 'BOLETO' ||
        paymentOpt.toUpperCase() === 'CARTÃO'
      )
    ) {
      throw new AppError(
        `Student's payment option must be "BOLETO" or  "CARTÃO"`,
      );
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
