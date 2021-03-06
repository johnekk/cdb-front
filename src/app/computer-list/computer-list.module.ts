import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ComputerListComponent } from './computer-list.component';
import { MatSortModule } from '@angular/material/sort';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ComputerListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatSortModule,
    NgxSpinnerModule
  ],
  exports: [
    ComputerListComponent
  ]
})
export class ComputerListModule { }
