import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComputerComponent } from './new-computer.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [NewComputerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule
  ],
  exports: [
    NewComputerComponent
  ]
})
export class NewComputerModule {

}
