import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAvailabitityComponent } from './reservation-availabitity.component';

describe('ReservationAvailabitityComponent', () => {
  let component: ReservationAvailabitityComponent;
  let fixture: ComponentFixture<ReservationAvailabitityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationAvailabitityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationAvailabitityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
