import { Component, OnInit } from '@angular/core';

import { Reservation } from '../domain/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-availabitity',
  templateUrl: './reservation-availabitity.component.html',
  styleUrls: ['./reservation-availabitity.component.css']
})
export class ReservationAvailabitityComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  checkAvailability(start: Date, end: Date): void {

    this.reservationService.getReservationsBetweenDates(start, end)
      .subscribe(reservations => this.reservations = reservations);
  }

  ngOnInit() {
  }

}
