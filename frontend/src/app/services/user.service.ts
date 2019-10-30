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
    return this.http.post(`api/users`, user);
  }

  getUser(id: number) {
    return this.http.get(`api/users/${id}`);
  }

  getUserAll() {
    return this.http.get(`api/v1/users`);
  }

  updateUser(id: number, user: User) {
    return this.http.put(`api/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`api/users/${id}`);
  }
}
