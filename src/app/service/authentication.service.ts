import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IAccount} from '../model/iaccount';
import {LocalStorageService} from './local-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private URL_API = environment.API_URL;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
  }

  login(credentials: IAccount): Observable<any> {
    return this.http.post(this.URL_API + 'login', credentials);
  }

  register(user: IAccount): Observable<any> {
    return this.http.post(this.URL_API + 'register', {
      email: user.email,
      name: user.name,
      password: user.password
    }, this.httpOptions);
  }

  isLogin() {
    let account = this.localStorageService.getAccount();
    return !(account === null);
  }
}
