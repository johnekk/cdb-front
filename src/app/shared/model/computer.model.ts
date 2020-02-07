import { Company } from './company.model';
import { Identifiers } from '@angular/compiler';


export class Computer {
    id: number;
    name: string;
    introduced: Date;
    discontinued: Date;
    company: Company;
}