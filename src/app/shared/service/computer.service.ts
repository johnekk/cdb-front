import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer.model';

@Injectable({
  providedIn: 'root'
})

export class ComputerService {

  public ip = '10.0.1.65';
  public url = 'http://' + this.ip + ':8080/computer-database/computers';

  constructor(private readonly httpClient: HttpClient) { }

  getComputers(): Observable<Computer[]> {
      return this.httpClient.get<Computer[]>(this.url);
  }

  newComputer(computer: Computer):Observable<Computer>{
    return this.httpClient.post<Computer>(this.url, computer)
  }
}
