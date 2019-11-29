import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../modules/project/model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient){
  }

  getProjects(page: number, size: number, sort: string) {
    return this.http.get(`api/v1/projects?page=${page}&size=${size}&sort=${sort}`);
  }

  createProject(project: Project) {
    return this.http.post(`api/v1/projects`, project);
  }
  deleteProject(id: number) {
    return this.http.delete(`api/v1/projects/${id}`);
  }
}
