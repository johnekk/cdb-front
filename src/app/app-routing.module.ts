import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { NewComputerComponent } from './new-computer/new-computer.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'computers/new',
    pathMatch: 'full'
  },
  {
    path: 'computers',
    component: ComputerListComponent,
    pathMatch: 'full'
  },
  {
    path: 'computers/new',
    component: NewComputerComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'computers',
    pathMatch: 'full'
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
