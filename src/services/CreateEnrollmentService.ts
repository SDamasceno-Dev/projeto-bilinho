/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/**
 * @file: CreateEnrollmentService
 * @info: Service responsible for the creation of an enrollment
 */

// Dependencies imports
import { getCustomRepository } from 'typeorm';

// Importing Models & Repositories
import Enrollment from '../models/Enrollment';
import EnrollmentRepository from '../repositories/EnrollmentRepository';

// Interfaces definition
interface RequestDTO {
  totalValue: number;
  numberInvoices: number;
  dueDayInvoices: number;
  courseName: string;
  educinst_id: string;
  student_id: string;
}
class CreateEnrollmentService {
  public async execute({
    totalValue,
    numberInvoices,
    dueDayInvoices,
    courseName,
    educinst_id,
    student_id,
  }: RequestDTO): Promise<Enrollment> {
    const enrollmentRepository = getCustomRepository(EnrollmentRepository);

    // Check if totalValue is > 0
    if (totalValue === null || totalValue <= 0) {
      throw new Error('Total value must be positive.');
    }

    // Check if number invoices >= 1
    if (numberInvoices === null || numberInvoices <= 0) {
      throw new Error('Number invoices must be integer and postive.');
    }

    // Check if due day is between 1 and 31
    if (dueDayInvoices < 1 || dueDayInvoices > 31) {
      throw new Error('Due day must be between 01 and 31');
    }

    // Check if course name is not blank
    if (courseName.trim() === '') {
      throw new Error('Course name must be informed');
    }

    const enrollment = enrollmentRepository.create({
      totalValue,
      numberInvoices,
      dueDayInvoices,
      courseName,
      educinst_id,
      student_id,
    });

    await enrollmentRepository.save(enrollment);

    return enrollment;
  }
}

export default CreateEnrollmentService;
