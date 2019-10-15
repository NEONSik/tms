import {Project} from '../../project/model/project';
import {User} from '../../user/model/user';

export class Task {
  id: number;
  description: string;
  priority: string;
  status: string;
  createDate: number;
  estimation: number;
  dueDate: number;
  assignee: User;
  ticketCode: string;
  updateDate: number;
  project: Project;
  reporter: User;
}
