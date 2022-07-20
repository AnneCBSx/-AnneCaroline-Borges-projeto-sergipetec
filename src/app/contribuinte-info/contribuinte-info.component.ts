import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contribuinte-info',
  templateUrl: './contribuinte-info.component.html',
  styleUrls: ['./contribuinte-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush



})
export class ContribuinteInfoComponent implements OnInit {

  constructor(
    ) { }
    mostrar: boolean = true;

  toggle () {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar)

  }

  ngOnInit(): void {
  }

}
