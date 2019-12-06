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

  getProjectsTable(page: number, size: number, sort: string): Observable<Page<Project>> {
    return this.http.get<Page<Project>>(`api/v1/projects?page=${page}&size=${size}&sort=${sort}`);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`api/v1/projects/${id}`);
  }

  getProjects(): Observable<Page<Project>> {
    return this.http.get<Page<Project>>(`api/v1/projects`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`api/v1/projects`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`api/v1/projects/${id}`);
  }
}
