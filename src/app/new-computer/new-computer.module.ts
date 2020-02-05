import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComputerComponent } from './new-computer.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewComputerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    NewComputerComponent
  ]
})
export class NewComputerModule { 
  

}
