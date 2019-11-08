import {User} from '../../user/model/user';

export class ProjectTable {
  id: number;
  projectCode: string;
  summary: string;
  projectManager: User;
}
