import { Component, OnInit } from '@angular/core';
import { Field } from '../domain/field';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  field: Field = {
    id: 1,
    name: 'Balcescu'
  };

  constructor() { }

  ngOnInit() {
  }

}
