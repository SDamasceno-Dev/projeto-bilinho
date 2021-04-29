/* eslint-disable camelcase */
/**
 * @file: EnrollmentRepository
 * @info: Responsible for everything that will affect a enrollment's
 * manipulation data
 */

// Dependencies import
import { EntityRepository, Repository } from 'typeorm';

// Import model entinty
import Enrollment from '../models/Enrollment';

@EntityRepository(Enrollment)
class EnrollmentRepository extends Repository<Enrollment> {}

export default EnrollmentRepository;
