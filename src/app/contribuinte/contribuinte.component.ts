import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContribuinteInfoComponent } from '../contribuinte-info/contribuinte-info.component';

@Component({
  selector: 'app-contribuinte',
  templateUrl: './contribuinte.component.html',
  styleUrls: ['./contribuinte.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContribuinteComponent implements OnInit {

  constructor( ) { }
  @Input() nome : string='';
  ngOnInit(): void {
  }

}
