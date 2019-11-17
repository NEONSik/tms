import {User} from '../../user/model/user';
import {Project} from '../../project/model/project';

export class Task {
  id: number;
  createDate: number;
  description: string;
  dueDate: number;
  estimation: number;
  priority: string;
  status: string;
  ticketCode: string;
  updateDate: number;
  assignee: User;
  project: Project;
  reporter: User;

  costructor() {}
}
