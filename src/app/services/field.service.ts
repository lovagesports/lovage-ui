import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Field } from '../domain/field';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private fieldsUrl = 'api/fields';  // URL to web api

  /** GET fields from the server */
  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.fieldsUrl)
      .pipe(
        tap(_ => this.log('fetched fields')),
        catchError(this.handleError('getField', []))
      );
  }

  /** GET field by id. Will 404 if id not found */
  getField(id: number): Observable<Field> {
    const url = `${this.fieldsUrl}/${id}`;
    return this.http.get<Field>(url).pipe(
      tap(_ => this.log(`fetched field id=${id}`)),
      catchError(this.handleError<Field>(`getField id=${id}`))
    );
  }

  /** Log a FieldService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FieldService: ${message}`);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
