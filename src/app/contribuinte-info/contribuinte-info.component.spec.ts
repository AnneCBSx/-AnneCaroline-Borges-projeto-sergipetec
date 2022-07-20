import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuinteInfoComponent } from './contribuinte-info.component';

describe('ContribuinteInfoComponent', () => {
  let component: ContribuinteInfoComponent;
  let fixture: ComponentFixture<ContribuinteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuinteInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribuinteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
