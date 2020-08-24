import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../../service/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private TOKEN_HEADER_KEY = 'Authorization';

  constructor(private token: LocalStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this.token.getToken();
    if(token != null){
      authReq = request.clone({
        headers:request.headers.set(this.TOKEN_HEADER_KEY,'Bearer '+token)
      })
    }
    return next.handle(authReq);
  }
}
