/**
 * StudentsRepository
 * @info: Responsible for everything that will affect a student's manipulation
 * data
 */

// Import model entinty
import Student from '../models/Student';

// Interfaces definition
interface CreateStudentDTO {
  name: string;
  itr: string;
  birthDate: Date;
  mobile: number;
  gender: string;
  paymentOpt: string;
}

class StudentRepository {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  // A method that lists all students in DB
  public all(): Student[] {
    return this.students;
  }

  // A method that creates a student in DB
  public create({
    name,
    itr,
    birthDate,
    mobile,
    gender,
    paymentOpt,
  }: CreateStudentDTO): Student {
    const student = new Student(
      name,
      itr,
      birthDate,
      mobile,
      gender,
      paymentOpt,
    );

    this.students.push(student);

    return student;
  }

  // Check if there's a student with same name in DB
  public findByName(name: string): Student | null {
    const findSameName = this.students.find(student => student.name === name);

    return findSameName || null;
  }
}

export default StudentRepository;
