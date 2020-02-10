import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComputerService } from '../shared/service/computer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyDTO } from '../shared/model/companyDTO.model';
import { ComputerDTO } from '../shared/model/computerDTO.model';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.scss']
})
export class EditComputerComponent implements OnInit {


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
  computer: ComputerDTO = new ComputerDTO();

  idd:number;
  


  constructor(private readonly route: ActivatedRoute,
    private computerService: ComputerService,
    private formBuilder: FormBuilder,
    private router: Router) {

      this.computerService.getCompanies().subscribe(
        (result: CompanyDTO[]) => {
          this.companyList = result;
        })

     }

  ngOnInit() {

    this.computer.companyDTO = new CompanyDTO();

    const id = this.route.snapshot.params.id;
    this.idd = id; 

    this.computerService.getComputer(id).subscribe(
      (result: ComputerDTO) => {
        this.computer = result;
        console.log('>>>>>>>'+this.computer.introduced)


      },
      () => {},
      () => {  }
    );

    this.initForm();
  }

  initForm(){
    this.computerForm = this.formBuilder.group({
      name: [this.computer.name, [Validators.required, Validators.minLength(2)]],
      introduced: [this.computer.name, [Validators.required]],
      discontinued: [this.computer.name],
      company: [this.computer.companyDTO.name, Validators.required]
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
          let computer:ComputerDTO = new ComputerDTO();
          
          computer.name = formValue['name'];

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

          this.computerService.updateComputer(this.idd, computer).subscribe(
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

}
