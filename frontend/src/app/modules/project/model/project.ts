import {User} from '../../user/model/user';

export class Project {
  id: number;
  projectCode: string;
  summary: string;
  // need User
  projectManager: User;
}
