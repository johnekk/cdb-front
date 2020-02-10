import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComputerComponent } from './edit-computer.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComputerComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    EditComputerComponent
  ]
})
export class EditComputerModule { }
