import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../shared/service/computer.service';
import { Computer } from '../shared/model/computer.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  

  constructor(private computerService: ComputerService,
    private formBuilder: FormBuilder,
    private router: Router){
        
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.computerForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(2)],
      introduced: ['', Validators.required],
      discontinued: ['', Validators.required]

    });
  }

  onSubmitForm(){

    const formValue = this.computerForm.value;

    if(this.name.length > 2){

      let computer:Computer = new Computer();
      computer.name = formValue['name'];
      computer.introduced = formValue['introduced'];
      computer.discontinued = formValue['discontinued'];

      // this.computerService.newComputer(computer).subscribe(
      //   ()=> {
      //     console.log("computer:"+computer.name)
      //     this.router.navigate(['/computers']);
      //   },
      //   (error) => {
      //     console.log("computer not added : " + error)

      //   }
      // )

      console.log(computer.name)
      console.log(computer.introduced)
      console.log(computer.discontinued)

      

    }

  }

  introducedBeforeDiscontinued():boolean{
    const formValue = this.computerForm.value;

    let introduced:Date = formValue['introduced'];
    let discontinued:Date = formValue['discontinued'];

    if(introduced && discontinued) {
      return introduced < discontinued
    }


  }

}
