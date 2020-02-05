import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ComputerListComponent } from './computer-list.component';
import { MatFormFieldModule } from '@angular/material';



@NgModule({
  declarations: [ComputerListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatFormFieldModule
  ],
  exports: [
    ComputerListComponent
  ]
})
export class ComputerListModule { }
