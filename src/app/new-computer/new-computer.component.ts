import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../shared/service/computer.service';
import { Computer } from '../shared/model/computer.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputerDTO } from '../shared/model/computerDTO.model';
import { Company } from '../shared/model/company.model';
import { CompanyDTO } from '../shared/model/companyDTO.model';

@Component({
  selector: 'app-new-computer',
  templateUrl: './new-computer.component.html',
  styleUrls: ['./new-computer.component.scss']
})
export class NewComputerComponent implements OnInit {

  name='';
  introduced:Date;
  discontinued:Date;
  computerForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  minDateDiscontinued: Date;
  isDateBefore: boolean;
  isDateBefore2: boolean = false;
  companyList: CompanyDTO[];
  mycompany: CompanyDTO;

  constructor(private computerService: ComputerService,
    private formBuilder: FormBuilder,
    private router: Router){
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear - 49, 0, 1);
      this.maxDate = new Date(currentYear + 100, 11, 31);

      this.computerService.getCompanies().subscribe(
        (result: CompanyDTO[]) => {
          this.companyList = result;
        }
)
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.computerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      introduced: ['', [Validators.required]],
      discontinued: [''],
      company: ['', Validators.required]
    });


    // const formValue = this.computerForm.value;
    // if(formValue['introduced']) { console.log('dddd')
    //     this.minDateDiscontinued = new Date(new Date(formValue['introduced']).getFullYear() - 0, 1, 1);}

  }

  onSubmitForm(){

    const formValue = this.computerForm.value;

    let introduced:Date = formValue['introduced'];
    let discontinued:Date = formValue['discontinued'];
    let company:CompanyDTO = formValue['company'];
    

    if(introduced && discontinued && company && introduced < discontinued){

        

          console.log('>'+company.id)
          console.log('>'+company.name)
   
          let computer:ComputerDTO = new ComputerDTO();
          computer.name = formValue['name'];
      //   computer.introduced = formValue['introduced'];
      //   computer.discontinued = formValue['discontinued'];  // YYYY-MM-DD


        let di:Date = new Date(formValue['introduced']);

        let day : string = (di.getDate() > 9) ? (''+di.getDate()) : ('0' + (di.getDate() + 1));
        let month : string = ((di.getMonth() + 1) > 9) ? (''+(di.getMonth() + 1)) : ('0' + (di.getMonth() + 1))
        let year : string = di.getFullYear()  + ''

          computer.introduced =  year
                        + '-' + month
                        + '-' + day

          

          if(formValue['discontinued']){

            console.log('in discontinued')
            
                let dd:Date = new Date(formValue['discontinued']);

                let day2 : string = (dd.getDate() > 9) ? (''+dd.getDate()) : ('0' + (dd.getDate() + 1));
                let month2 : string = ((dd.getMonth() + 1) > 9) ? (''+(dd.getMonth() + 1)) : ('0' + (dd.getMonth() + 1))
                let year2 : string = dd.getFullYear()  + ''

                  computer.discontinued =  year2
                                + '-' + month2
                                + '-' + day2

          }
          else computer.discontinued = ''

          computer.companyDTO = new CompanyDTO();
          computer.companyDTO.id = 
                        ''+company.id
          computer.companyDTO.name = company.name

          console.log(computer);

          this.computerService.newComputer(computer).subscribe(
            ()=> {
              console.log("computer:"+computer.name)
              this.router.navigate(['/computers']);
            },
            (error) => {
              console.log("computer not added : " + error)

            }
          )

          console.log(computer.name)
          console.log(computer.introduced)
          console.log(computer.discontinued)
      }else if(introduced > discontinued) this.isDateBefore2 = true;
      else this.isDateBefore = false;

  //  }

  }

  introducedBeforeDiscontinued():void{

    console.log("i m in introducedBeforeDiscontinued")

    const formValue = this.computerForm.value;

    let introduced:Date = formValue['introduced'];
    let discontinued:Date = formValue['discontinued'];

    if(introduced && discontinued) { 

      console.log("introducedBeforeDiscontinued : " + (introduced < discontinued))

      this.isDateBefore = (introduced < discontinued);
      //return (introduced < discontinued);
    }
    else if(introduced) {  console.log("introducedBeforeDiscontinued : " + true); this.isDateBefore = true;}
    else this.isDateBefore = false;

    

  }

}
