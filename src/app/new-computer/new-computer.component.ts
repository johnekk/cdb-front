import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../shared/service/computer.service';
import { Computer } from '../shared/model/computer.model';

@Component({
  selector: 'app-new-computer',
  templateUrl: './new-computer.component.html',
  styleUrls: ['./new-computer.component.scss']
})
export class NewComputerComponent implements OnInit {

  name='';

  constructor(private computerService: ComputerService){

  }

  ngOnInit() {

  }

  addComputer(){
    if(this.name.length > 2){

      let computer:Computer = new Computer();
      computer.name = this.name;

      this.computerService.newComputer(computer).subscribe(
        ()=> {
          console.log("computer added")
        },
        (error) => {
          console.log("computer not added : " + error)
        }
      )

    }
  }

}
