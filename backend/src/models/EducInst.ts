/* eslint-disable camelcase */
/**
 * @file: EducInst
 * @info: model of entity Education Institute
 */

// Dependencies imports
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('educinsts') // Entity of the table educints
class EducInst {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  ein: string;

  @Column('varchar')
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default EducInst;
