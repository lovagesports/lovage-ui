import { Component, OnInit, Input } from '@angular/core';

import { Field } from '../domain/field';
import { Reservation } from '../domain/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})

export class ReservationsComponent implements OnInit {

  @Input() field: Field;

  ngOnInit(): void {
  }

  constructor(
    private reservationService: ReservationService) { }
}
