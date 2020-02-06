import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ComputerListComponent } from './computer-list.component';
<<<<<<< HEAD
import { MatSortModule } from '@angular/material/sort';
import { NgxSpinnerModule } from 'ngx-spinner';
=======
import { MatFormFieldModule } from '@angular/material';


>>>>>>> feature/newcomputer

@NgModule({
  declarations: [ComputerListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
<<<<<<< HEAD
    MatSortModule,
    NgxSpinnerModule
=======
    MatFormFieldModule
>>>>>>> feature/newcomputer
  ],
  exports: [
    ComputerListComponent
  ]
})
export class ComputerListModule { }
