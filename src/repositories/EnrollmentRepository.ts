/**
 * StudentsRepository
 * @info: Responsible for everything that will affect a student's manipulation
 * data
 */

// Import model entinty
import Enrollment from '../models/Enrollment';

// Interfaces definition
interface CreateEnrollmentDTO {
  totalValue: number;
  numberInvoices: number;
  dueDayInvoices: number;
  courseName: string;
  idEducInst: string;
  idStudent: string;
}

class EnrollmentRepository {
  private enrollments: Enrollment[];

  constructor() {
    this.enrollments = [];
  }

  // A method that lists all enrollments in DB
  public all(): Enrollment[] {
    return this.enrollments;
  }

  // A method that creates an enrollment in DB
  public create({
    totalValue,
    numberInvoices,
    dueDayInvoices,
    courseName,
    idEducInst,
    idStudent,
  }: CreateEnrollmentDTO): Enrollment {
    const enrollment = new Enrollment(
      totalValue,
      numberInvoices,
      dueDayInvoices,
      courseName,
      idEducInst,
      idStudent,
    );

    this.enrollments.push(enrollment);

    return enrollment;
  }
}

export default EnrollmentRepository;
