/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
/**
 * @file: CreateUserService
 * @info: Service responsible for the creation of an user
 */

// Dependencies imports
import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

// Errors imports
import AppError from '../errors/AppError';

// Models & Repositories imports
import User from '../models/User';

// Config imports
import uploadConfig from '../config/upload';

// Interfaces definition
interface RequestDTO {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.');
    }

    if (user.avatar) {
      // Remove previous avatar
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
