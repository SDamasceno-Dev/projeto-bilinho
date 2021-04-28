/**
 * EnrollmentRepository
 * @info: Responsible for everything that will affect an enrollments's
 * manipulation data
 */

// Dependendies import
import { v4 as uuid } from 'uuid';

// Class declaration
class Enrollment {
  id: string;

  totalValue: number;

  numberInvoices: number;

  dueDayInvoices: number;

  courseName: string;

  idEducInst: string;

  idStudent: string;

  constructor({
    totalValue,
    numberInvoices,
    dueDayInvoices,
    courseName,
    idEducInst,
    idStudent,
  }: Omit<Enrollment, 'id'>) {
    this.id = uuid();
    this.totalValue = totalValue;
    this.numberInvoices = numberInvoices;
    this.dueDayInvoices = dueDayInvoices;
    this.courseName = courseName;
    this.idEducInst = idEducInst;
    this.idStudent = idStudent;
  }
}

export default Enrollment;
