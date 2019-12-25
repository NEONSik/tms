import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../modules/user/model/user';
import {Observable} from 'rxjs';
import {Page} from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`api/v1/users`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`api/v1/users/${id}`);
  }

  getUserAll(page: number, size: number, sort: string): Observable<Page<User>> {
    return this.http.get<Page<User>>(`api/v1/users?page=${page}&size=${size}&sort=${sort}`);
  }

  getUserByRole(role: string): Observable<Page<User>> {
    return this.http.get<Page<User>>(`api/v1/users?role=${role}`);
  }

  getUsersForAssignee(): Observable<Page<User>> {
    return this.http.get<Page<User>>(`api/v1/users`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`api/v1/users/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`api/v1/users/${id}`);
  }
}
