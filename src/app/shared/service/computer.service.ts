import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer.model';
import { ComputerDTO } from '../model/computerDTO.model';
import { Company } from '../model/company.model';
import { CompanyDTO } from '../model/companyDTO.model';

@Injectable({
  providedIn: 'root'
})

export class ComputerService {

  public ip = '10.0.1.76';
  public url = 'http://' + this.ip + ':8080/computer-database/computers';
  public urlCompanies = 'http://' + this.ip + ':8080/computer-database/companys';

  constructor(private readonly httpClient: HttpClient) { }

  getComputers(): Observable<Computer[]> {
      return this.httpClient.get<Computer[]>(this.url);
  }

  getComputer(id: number): Observable<ComputerDTO> {
    return this.httpClient.get<ComputerDTO>(this.url+ `/${id}`);
  }

  updateComputer(id: number, computerDTO:ComputerDTO): Observable<ComputerDTO> {
    return this.httpClient.put<ComputerDTO>(this.url+ `/${id}`, computerDTO);
  }

  getCompanies(): Observable<CompanyDTO[]> {
    return this.httpClient.get<CompanyDTO[]>(this.urlCompanies);
}

  newComputer(computer: ComputerDTO):Observable<ComputerDTO>{
    return this.httpClient.post<ComputerDTO>(this.url, computer)
  }

  deleteComputer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}/`);
  }

}
