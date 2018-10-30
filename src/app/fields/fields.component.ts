import { Component, OnInit } from '@angular/core';
import { Field } from '../domain/field';
import { FIELDS } from '../domain/mock-fields';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})

export class FieldsComponent implements OnInit {

  fields = FIELDS;

  field: Field = {
    id: 1,
    name: 'Balcescu',
    location: 'Balcescu'
  };

  selectedField: Field;
  
  onSelect(field: Field): void {
    this.selectedField = field;
  }

  constructor() { }

  ngOnInit() {
  }

}
