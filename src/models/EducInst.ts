import { v4 as uuid } from 'uuid';

class EducInst {
  id: string;

  name: string;

  ein: string;

  type: string;

  constructor(name: string, ein: string, type: string) {
    this.id = uuid();
    this.name = name;
    this.ein = ein;
    this.type = type;
  }
}

export default EducInst;
