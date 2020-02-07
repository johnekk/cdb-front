import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { LoggingComponent } from './logging/logging.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'computers',
    canActivate: [AuthGuard],
    component: ComputerListComponent,
    pathMatch: 'full'
  },
  {
    path: 'logging',
    component: LoggingComponent,
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
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
