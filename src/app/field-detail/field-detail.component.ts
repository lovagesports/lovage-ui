import { Component, OnInit, Input } from '@angular/core';

import { Field } from '../domain/field';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {

  @Input() field: Field;

  constructor() { }

  ngOnInit() {
  }

}
