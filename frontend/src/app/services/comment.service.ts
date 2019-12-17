import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getCommentById(id: number): Observable<Comments> {
    return this.http.get<Comments>(`api/v1/comments/${id}`);
  }

  getAllComments(taskId: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`api/v1/comments?taskId=${taskId}`);
  }

  createComment(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(`api/v1/comments`, comment);
  }

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`api/v1/comments/${id}`);
  }
}
