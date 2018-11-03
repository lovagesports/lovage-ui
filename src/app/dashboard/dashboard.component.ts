import { Component, OnInit } from '@angular/core';
import { Field } from '../domain/field';
import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fields: Field[] = [];

  constructor(private fieldService: FieldService) { }

  ngOnInit() {
    this.getFields();
  }

  getFields(): void {
    this.fieldService.getFields()
      .subscribe(fields => this.fields = fields.slice(1, 5));
  }
}
