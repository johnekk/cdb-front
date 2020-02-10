import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggingComponent } from './logging.component';
import { LoggingFormComponent } from './logging-form/logging-form.component';



@NgModule({
  declarations: [
    LoggingComponent,
    LoggingFormComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ]
})
export class LoggingModule { }
