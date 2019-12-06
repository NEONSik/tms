import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../modules/project/model/project';
import {Observable} from 'rxjs';
import {Page} from '../models/page';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProjects(page: number, size: number, sort: string): Observable<Page<Project>> {
    return this.http.get<Page<Project>>(`api/v1/projects?page=${page}&size=${size}&sort=${sort}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`api/v1/projects`, project);
  }

  getProjectCode(projectCode: boolean): Observable<Page<Project>> {
    return this.http.get<Page<Project>>(`api/v1/projects`);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`api/v1/projects/${id}`);
  }
}
