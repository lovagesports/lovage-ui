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

  constructor(private messageService: MessageService) { }
}
