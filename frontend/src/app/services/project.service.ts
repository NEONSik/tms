import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../modules/project/model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProjects() {
    return this.http.get(`api/v1/v1/projects`);
  }

  createProject(project: Project) {
    return this.http.post(`api/v1/projects`, project);
  }
}
