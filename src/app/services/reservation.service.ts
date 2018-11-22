
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

  private reservationsUrl = 'http://localhost:8080/api/reservations';  // URL to web api
  private fieldsUrl = 'http://localhost:8080/api/fields';  // URL to web api

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
  
  	var sDate = this.datePipe.transform(start, 'yyyy-MM-dd');
	var eDate = this.datePipe.transform(end, 'yyyy-MM-dd');
	
    return this.http.get<Reservation[]>(`${this.reservationsUrl}/?start=${sDate}&end=${eDate}`)
      .pipe(
        tap(_ => this.log('fetched reservations')),
        catchError(this.handleError('getReservationsBetweenDates', []))
      );
  }

  /** GET fields available between dates */
  getFieldsAvailableBetweenDates(start: Date, end: Date): Observable<Field[]> {
    return this.http.get<Field[]>(`${this.fieldsUrl}/available?start=${start}&end=${end}`)
      .pipe(
        tap(_ => this.log('fetched fields')),
        catchError(this.handleError('getFieldsAvailableBetweenDates', []))
      );
  }

  /** Log a ReservationService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ReservationService: ${message} `);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message} `);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private datePipe: DatePipe) { }
}
