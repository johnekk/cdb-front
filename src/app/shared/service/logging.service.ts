import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public ip = '10.0.1.76';
  public url = 'http://' + this.ip + ':8080/computer-database/users';

  public user: User;

  constructor(private readonly httpClient: HttpClient) { }

  Login(username: string, password: string): Observable<User> {
    console.log('interieur du login');
    return this.httpClient.post<User>(this.url, {username, password});
  }
}
