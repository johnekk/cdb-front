import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { LogginComponent } from './loggin/loggin.component';

const routes: Routes = [
  {
    path: 'computers',
    component: ComputerListComponent,
    pathMatch: 'full'
  },
  {
    path: 'loggin',
    component: LogginComponent,
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
