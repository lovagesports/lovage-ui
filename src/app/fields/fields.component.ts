import { Component, OnInit } from '@angular/core';
import { Field } from '../domain/field';

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

  add(location: string, name: string): void {
    location = location.trim();
    name = name.trim();

    if (!location) { return; }
    if (!name) { return; }

    this.fieldService.addField({ location, name } as Field)
      .subscribe(field => {
        this.fields.push(field);
      });
  }

  delete(field: Field): void {
    this.fields = this.fields.filter(h => h !== field);
    this.fieldService.deleteField(field).subscribe();
  }

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
    this.getFields();
  }
}
