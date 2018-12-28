import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public auth: AuthenticationService, public router: Router, public state: RouterStateSnapshot) { }
    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: this.state.url } });
            return false;
        }
        return true;
    }
}
