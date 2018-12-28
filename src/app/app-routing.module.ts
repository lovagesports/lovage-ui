import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FieldsComponent } from './fields/fields.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ReservationAvailabitityComponent } from './reservation-availabitity/reservation-availabitity.component';
import { FieldBookComponent } from './field-book/field-book.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'fields/:id', component: FieldDetailComponent, canActivate: [AuthGuard] },
    { path: 'fields', component: FieldsComponent, canActivate: [AuthGuard] },
    { path: 'players/:id', component: PlayerDetailComponent, canActivate: [AuthGuard] },
    { path: 'reservations', component: ReservationAvailabitityComponent, canActivate: [AuthGuard] },
    { path: 'field-book', component: FieldBookComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
