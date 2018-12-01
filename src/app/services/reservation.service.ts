
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

import { Reservation } from '../domain/reservation';
import { Field } from '../domain/field';

import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class ReservationService {

    public reservationData: Reservation; // used to pass data from one component to another


    private reservationsUrl = 'http://localhost:8080/api/reservations';
    private fieldsUrl = 'http://localhost:8080/api/fields';

    /** GET reservations of field */
    getReservationsByField(fieldId: number): Observable<Reservation[]> {
        return this.http.get<Reservation[]>(`${this.reservationsUrl}/?field.id=${fieldId}`)
            .pipe(
                tap(_ => this.log('fetched reservations')),
                catchError(this.handleError('getReservations', []))
            );
    }

    /** GET reservations between dates */
    getReservationsBetweenDates(start: Date, end: Date): Observable<Reservation[]> {

        return this.http.get<Reservation[]>(`${this.reservationsUrl}/?start=${start}&end=${end}`)
            .pipe(
                tap(_ => this.log('fetched reservations')),
                catchError(this.handleError('getReservationsBetweenDates', []))
            );
    }

    /** GET fields available between dates */
    getFieldsAvailableBetweenDates(date: Date, start: string, duration: number): Observable<Field[]> {

        const stringDate = this.datePipe.transform(date, 'yyyy-MM-dd');

        return this.http.get<Field[]>(`${this.fieldsUrl}/available?date=${stringDate}&start=${start}&duration=${duration}`)
            .pipe(
                tap(_ => this.log('fetched fields')),
                catchError(this.handleError('getFieldsAvailableBetweenDates', []))
            );
    }

    /** Make a booking with this reservation information*/
    book(reservation: Reservation): Observable<Reservation> {

        return this.http.post<Reservation>(`${this.reservationsUrl}/book`, reservation, httpOptions).pipe(
            tap((added: Reservation) => this.log(`added reservation id=${added.id}`)),
            catchError(this.handleError<any>('bookField'))
        );
    }

    /** Log a ReservationService message with the MessageService *///
    private log(message: string) {
        this.messageService.add(`ReservationService: ${message} `);
    }

    /**
        * Handle Http operation that failed. Let the app continue.
        *
        * @param operation -
        *            name of the operation that failed
        * @param result -
        *            optional value to return as the observable result
        */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            /// / TODO: send the error to remote logging infrastructure
            console.error(error); /// / log to console instead

            /// / TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message} `);

            /// / Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    constructor(
        private http: HttpClient,
        private messageService: MessageService,
        private datePipe: DatePipe) { }
}
