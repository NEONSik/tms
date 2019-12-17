import {User} from '../modules/user/model/user';
import {Task} from '../modules/task/model/task';

export class Comments {
  id: number;
  content: string;
  user: User;
  task: Task;
}
