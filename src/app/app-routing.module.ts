import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ReservationAvailabitityComponent } from './reservation-availabitity/reservation-availabitity.component';
import { FieldBookComponent } from './field-book/field-book.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'fields/:id', component: FieldDetailComponent },
    { path: 'fields', component: FieldsComponent },
    { path: 'players/:id', component: PlayerDetailComponent },
    { path: 'reservations', component: ReservationAvailabitityComponent },
    { path: 'field-book', component: FieldBookComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
