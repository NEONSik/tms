import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modules/user/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`/api/v1/users/${id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/v1/users');
  }
}
