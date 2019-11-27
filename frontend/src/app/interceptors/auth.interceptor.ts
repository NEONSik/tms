import {AuthService} from '../services/auth.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  dublicate;

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('token/generate-token')) {
      return next.handle(req);
    }
    this.dublicate = req.clone({
      setHeaders: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      }
    });
    return next.handle(this.dublicate);
  }
}
