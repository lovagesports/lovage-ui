import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Field } from '../domain/field';
import { FIELDS } from '../domain/mock-fields';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  getFields(): Observable<Field[]> {
    // TODO: send the message _after_ fetching the fields
    this.messageService.add('FieldsService: fetched fields');
    return of(FIELDS);
  }

  getField(id: number): Observable<Field> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`FieldService: fetched field id=${id}`);
    return of(FIELDS.find(field => field.id === id));
  }

  constructor(private messageService: MessageService) { }
}
