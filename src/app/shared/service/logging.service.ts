import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public ip = '10.0.1.65';
  public url = 'http://' + this.ip + ':8080/computer-database/computers';

  constructor(private readonly httpClient: HttpClient) { }

  getUser(username: string, password: string): Observable<User> {
      return this.httpClient.get<User>(this.url);
  }
}
