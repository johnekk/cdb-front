import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { LogginComponent } from './loggin.component';
import { LogginFormComponent } from './loggin-form/loggin-form.component';
import { MatInputModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    LogginComponent,
    LogginFormComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatInputModule,
    MatButtonModule
  ], 
  exports: [
  ]
})
export class LogginModule { }
