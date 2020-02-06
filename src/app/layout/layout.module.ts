import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
