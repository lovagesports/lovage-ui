import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

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
    ReservationAvailabitityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
