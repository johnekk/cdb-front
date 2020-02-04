import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ComputerListComponent } from './computer-list.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ComputerListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatSortModule
  ],
  exports: [
    ComputerListComponent
  ]
})
export class ComputerListModule { }
