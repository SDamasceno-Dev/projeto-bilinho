import { v4 as uuid } from 'uuid';

class EducInst {
  id: string;

  eni: string;

  type: string;

  constructor(eni: string, type: string) {
    this.id = uuid();
    this.eni = eni;
    this.type = type;
  }
}

export default EducInst;
