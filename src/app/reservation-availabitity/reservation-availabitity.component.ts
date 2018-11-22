import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Field } from '../domain/field';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-availabitity',
  templateUrl: './reservation-availabitity.component.html',
  styleUrls: ['./reservation-availabitity.component.css']
})
export class ReservationAvailabitityComponent implements OnInit {

  fields: Field[];
	 startDatee = new Date();
	 endDatee = new Date();
	 
  constructor(private reservationService: ReservationService) { }

  checkAvailability(): void {

	this.reservationService.getFieldsAvailableBetweenDates(this.startDatee, this.endDatee)
      .subscribe(fields => this.fields = fields);
  }

  ngOnInit() {
  }

}
