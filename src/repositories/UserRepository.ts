/**
 * @file: UserRepository
 * @info: Responsible for everything that will affect an User manipulation data
 */

// Dependencies import
import { EntityRepository, Repository } from 'typeorm';

// Import model entinty
import User from '../models/User';

// Interfaces definition

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export default UserRepository;
