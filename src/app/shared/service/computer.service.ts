import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer.model';
import { ComputerDTO } from '../model/computerDTO.model';

@Injectable({
  providedIn: 'root'
})

export class ComputerService {  

  public ip = '10.0.1.76';
  public url = 'http://' + this.ip + ':8080/computer-database/computers';

  constructor(private readonly httpClient: HttpClient) { }

  getComputers(): Observable<Computer[]> {
      return this.httpClient.get<Computer[]>(this.url);
  }

  newComputer(computer: ComputerDTO):Observable<ComputerDTO>{
    return this.httpClient.post<ComputerDTO>(this.url, computer)
  }

  deleteComputer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}/`);
}

}
