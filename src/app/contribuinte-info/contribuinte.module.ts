import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuinteComponent } from '../contribuinte/contribuinte.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContribuinteInfoModule } from './contribuinte-info.module';



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
