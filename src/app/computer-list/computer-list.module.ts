import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { ComputerListComponent } from './computer-list.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [ComputerListComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    LayoutModule
  ],
  exports: [
    ComputerListComponent
  ]
})
export class ComputerListModule { }
