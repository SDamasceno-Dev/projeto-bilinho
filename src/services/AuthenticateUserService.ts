/* eslint-disable class-methods-use-this */
/**
 * @file: AuthenticateUserService
 * @info: Service responsible for the authentication of the user
 */

// Dependencies imports
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

// Errors imports
import AppError from '../errors/AppError';

// Importing Models & Repositories
import User from '../models/User';

// Interfaces definition
interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: RequestDTO): Promise<ResponseDTO> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    // Md5 seed: 6a5s4d65f4as65df465asdf89a4sdfas6f48ads4f4a
    // Md5 hash: 0d3ec17be0a1e2eee0e7b4afdd205ca3
    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });
    return { user, token };
  }
}

export default AuthenticateUserService;
