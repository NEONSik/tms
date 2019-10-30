import {User} from '../../user/model/user';

export class Task {
  id: number;
  createdate: number;
  description: string;
  duedate: number;
  estimation: number;
  priority: string;
  status: string;
  ticketcode: string;
  updatedate: number;
  assigneid: User;
  reporterid: User;

  costructor() {

  }
}
