import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  createTask(task) {
    return this.http.post(`api/v1/tasks`, task);
  }

  getTask(id: number) {
    return this.http.get(`api/v1/tasks/${id}`);
  }

  deleteTask(id: number) {
    return this.http.delete(`api/v1/tasks/${id}`);
  }

  getTaskPage(page: number, size: number, sort: string) {
    return this.http.get(`api/v1/tasks/pm?page=${page}&size=${size}&sort=${sort}`);
  }

  getTasks() {
    return this.http.get(`api/v1/tasks`);
  }
}
