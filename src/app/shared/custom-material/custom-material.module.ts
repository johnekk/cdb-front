import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
<<<<<<< HEAD
import { MatInputModule, MatTableModule, MatPaginatorModule, MatCheckboxModule } from '@angular/material';
=======
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSelectModule,
   MatDatepickerModule, MatNativeDateModule } from '@angular/material';
>>>>>>> feature/newcomputer
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatCheckboxModule,
=======
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
>>>>>>> feature/newcomputer
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatCheckboxModule
=======
    MatSelectModule,
    MatDatepickerModule,
    
>>>>>>> feature/newcomputer
  ]
})
export class CustomMaterialModule { }
