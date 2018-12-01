import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatePipe } from '@angular/common';

import { MatInputModule, MatListModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { InMemoryDataService } from './services/in-memory-data.service';
import { FieldSearchComponent } from './field-search/field-search.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationAvailabitityComponent } from './reservation-availabitity/reservation-availabitity.component';
import { FieldBookComponent } from './field-book/field-book.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    FieldDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FieldSearchComponent,
    PlayerDetailComponent,
    ReservationsComponent,
    ReservationAvailabitityComponent,
    FieldBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatDatepickerModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
