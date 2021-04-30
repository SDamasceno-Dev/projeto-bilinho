/* eslint-disable class-methods-use-this */
/**
 * @file: CreateUserService
 * @info: Service responsible for the creation of an user
 */

// Dependencies imports
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

// Importing Models & Repositories
import User from '../models/User';

// Interfaces definition
interface RequestDTO {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    // Check if a user exists on DB
    const checkUserExists = await usersRepository.findOne({ where: { email } });
    if (checkUserExists) {
      throw new Error('Email already registered on DB');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
