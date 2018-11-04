import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Field } from '../domain/field';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  /** PUT: update the field on the server */
  updateField(field: Field): Observable<any> {
    return this.http.put(this.fieldsUrl, field, httpOptions).pipe(
      tap(_ => this.log(`updated field id=${field.id}`)),
      catchError(this.handleError<any>('updateField'))
    );
  }

  /** POST: add a new field to the server */
  addField(field: Field): Observable<Field> {
    return this.http.post<Field>(this.fieldsUrl, field, httpOptions).pipe(
      tap((added: Field) => this.log(`added field w/ id=${added.id}`)),
      catchError(this.handleError<Field>('addField'))
    );
  }

  /** DELETE: delete the field from the server */
  deleteField(field: Field | number): Observable<Field> {
    const id = typeof field === 'number' ? field : field.id;
    const url = `${this.fieldsUrl}/${id}`;

    return this.http.delete<Field>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted field id=${id}`)),
      catchError(this.handleError<Field>('deleteField'))
    );
  }

  /* GET fields whose name contains search term */
  searchFields(term: string): Observable<Field[]> {
    if (!term.trim()) {
      // if not search term, return empty field array.
      return of([]);
    }
    return this.http.get<Field[]>(`${this.fieldsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found fields matching "${term}"`)),
      catchError(this.handleError<Field[]>('searchFields', []))
    );
  }

  /** Log a FieldService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FieldService: ${message} `);
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
    private messageService: MessageService) { }
}
