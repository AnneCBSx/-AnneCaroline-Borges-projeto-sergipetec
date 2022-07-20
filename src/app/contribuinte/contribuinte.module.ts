import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuinteComponent } from './contribuinte.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContribuinteInfoModule } from '../contribuinte-info/contribuinte-info.module';



@NgModule({
  declarations: [
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    ContribuinteInfoModule
  ]
})
export class ContribuinteModule { }
