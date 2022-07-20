import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ContribuinteComponent } from './contribuinte/contribuinte.component';
import{ ContribuinteInfoModule} from'./contribuinte-info/contribuinte-info.module';



@NgModule({
  declarations:  [ AppComponent ],
  bootstrap: [AppComponent],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    ContribuinteInfoModule,


  ],
  
})
export class AppModule { }
