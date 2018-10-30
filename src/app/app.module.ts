import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    FieldDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
