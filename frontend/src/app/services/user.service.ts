import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../modules/user/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    return this.http.post(`api/v1/users`, user);
  }

  getUser(id: number) {
    return this.http.get(`api/v1/users/${id}`);
  }

  getUserAll(page: number, size: number, sort: string) {
    return this.http.get(`api/v1/users?page=${page}&size=${size}&sort=${sort}`);
  }

  getProjectManager(role: string) {
    return this.http.get(`api/v1/users?role=${role}`);
  }

  updateUser(id: number, user: User) {
    return this.http.put(`api/v1/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`api/v1/users/${id}`);
  }
}
