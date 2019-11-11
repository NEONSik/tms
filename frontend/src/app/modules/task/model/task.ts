import {User} from '../../user/model/user';
import {Project} from '../../project/model/project';

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
  assignee: User;
  project: Project;
  reporter: User;

  costructor() {}
}
