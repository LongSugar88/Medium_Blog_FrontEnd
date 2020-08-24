import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IAccount} from '../model/iaccount';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }
  createAccount(data: IAccount): Observable<any> {
    return this.http.post(this.API_URL + 'register', data);
  }
  getAccount(id: number): Observable<IAccount>{
    return this.http.get<IAccount>(this.API_URL + 'api/account-details/' + id);
  }
}
