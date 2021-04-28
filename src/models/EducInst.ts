/**
 * @file: EducInst
 * @info: model of entity Education Institute
 */

// Dependencies imports
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default EducInst;
