import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBookComponent } from './field-book.component';

describe('FieldBookComponent', () => {
  let component: FieldBookComponent;
  let fixture: ComponentFixture<FieldBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
