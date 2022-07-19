import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribuinte',
  templateUrl: './contribuinte.component.html',
  styleUrls: ['./contribuinte.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContribuinteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
