import { Component, OnInit } from '@angular/core';

import { Field } from '../domain/field';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-availabitity',
  templateUrl: './reservation-availabitity.component.html',
  styleUrls: ['./reservation-availabitity.component.css']
})
export class ReservationAvailabitityComponent implements OnInit {

  fields: Field[];

  constructor(private reservationService: ReservationService) { }

  checkAvailability(start: Date, end: Date): void {

    this.reservationService.getFieldsAvailableBetweenDates(start, end)
      .subscribe(fields => this.fields = fields);
  }

  ngOnInit() {
  }

}
