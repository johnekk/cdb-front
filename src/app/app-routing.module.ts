import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { LoggingComponent } from './logging/logging.component';
import { AuthGuard } from './auth/auth.guard';
import { NewComputerComponent } from './new-computer/new-computer.component';

const routes: Routes = [
 
  
  {
    path: 'computers',
    component: ComputerListComponent,
    pathMatch: 'full'
  },
  {
    path: 'logging',
    component: LoggingComponent,
  },
  {
    path: 'computers/new', 
    component: NewComputerComponent,
    pathMatch: 'full'
  },
  {
    path: 'fr',
    component: LoggingComponent,
  },
  {
    path: 'en',
    component: LoggingComponent,
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
