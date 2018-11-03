import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Field } from '../domain/field';
import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {

  @Input() field: Field;

  constructor(
    private route: ActivatedRoute,
    private fieldService: FieldService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getField();
  }

  getField(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fieldService.getField(id)
      .subscribe(field => this.field = field);
  }

  goBack(): void {
    this.location.back();
  }
}
