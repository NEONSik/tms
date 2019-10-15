import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../modules/Task/model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`/api/v1/tasks/${id}`);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/v1/tasks');
  }
}
