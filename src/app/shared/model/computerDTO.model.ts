import { Company } from './company.model';
import { Identifiers } from '@angular/compiler';
import { CompanyDTO } from './companyDTO.model';


export class ComputerDTO {
    id?: number;
    name?: string;
    introduced?: string;
    discontinued?: string;
    companyDTO?: CompanyDTO;
}