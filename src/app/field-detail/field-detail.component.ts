import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Field } from '../domain/field';
import { FieldService } from '../services/field.service';
import { ReservationService } from '../services/reservation.service';

@Component( {
    selector: 'app-field-detail',
    templateUrl: './field-detail.component.html',
    styleUrls: ['./field-detail.component.css']
} )
export class FieldDetailComponent implements OnInit {

    @Input() field: Field;

    constructor(
        private route: ActivatedRoute,
        private fieldService: FieldService,
        private reservationService: ReservationService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getField();
    }

    getField(): void {
        const id = +this.route.snapshot.paramMap.get( 'id' );
        this.fieldService.getField( id )
            .subscribe( field => this.field = field );
    }

    save(): void {
        this.fieldService.updateField( this.field )
            .subscribe(() => this.goBack() );
    }

    book(): void {
        this.reservationService.bookField( this.field )
            .subscribe(() => this.goBack() );
    }

    goBack(): void {
        this.location.back();
    }
}
