import { Component, OnInit } from '@angular/core';
import { Field } from '../domain/field';
import { FIELDS } from '../domain/mock-fields';

import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})

export class FieldsComponent implements OnInit {

  fields: Field[];

  getFields(): void {
    this.fieldService.getFields()
      .subscribe(fields => this.fields = fields);
  }

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
    this.getFields();
  }
}
