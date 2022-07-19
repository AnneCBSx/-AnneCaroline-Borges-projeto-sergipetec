import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ContribuinteComponent } from './contribuinte/contribuinte.component';


@NgModule({
  declarations: [
    AppComponent,
    ContribuinteComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ContribuinteComponent
  ]
})
export class AppModule { }
