import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../modules/task/model/task';
import {Page} from '../models/page';
import {Project} from '../modules/project/model/project';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  uppdateTask(id: number, task: Task) {
    return this.http.put(`api/v1/tasks/${id}`, task);
  }


  createTask(task): Observable<Task> {
    return this.http.post<Task>(`api/v1/tasks`, task);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`api/v1/tasks/${id}`);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`api/v1/tasks/${id}`);
  }

  getTasks(page: number, size: number, sort: string): Observable<Page<Task>> {
    return this.http.get<Page<Task>>(`api/v1/tasks?page=${page}&size=${size}&sort=${sort}`);
  }
}
