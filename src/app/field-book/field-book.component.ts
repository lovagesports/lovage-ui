import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Field } from '../domain/field';
import { Reservation } from '../domain/reservation';
import { FieldService } from '../services/field.service';
import { ReservationService } from '../services/reservation.service';

@Component({
    selector: 'app-field-book',
    templateUrl: './field-book.component.html',
    styleUrls: ['./field-book.component.css']
})
export class FieldBookComponent implements OnInit {

    @Input() field: Field;
    @Input() date: Date;
    @Input() startTime: string;
    @Input() duration: number;

    constructor(private reservationService: ReservationService,
        private location: Location) { }

    ngOnInit() {
    }

    book(): void {
        const reservation = new Reservation();
        reservation.duration = this.duration;
        reservation.field = this.field;
        reservation.start = this.date;
        reservation.time = this.startTime;

        this.reservationService.book(reservation)
            .subscribe(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

}
