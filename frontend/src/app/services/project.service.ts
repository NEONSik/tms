import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../modules/Project/model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`/api/v1/projects/${id}`);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/api/v1/projects');
  }
}
