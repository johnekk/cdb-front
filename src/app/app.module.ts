import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ComputerListModule } from './computer-list/computer-list.module';
import { LoggingModule } from './logging/logging.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NewComputerModule } from './new-computer/new-computer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ComputerListModule,
    HttpClientModule,
    LoggingModule,
    MatInputModule,
    MatButtonModule,
    NgxSpinnerModule,
    NewComputerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
