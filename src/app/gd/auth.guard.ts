import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CheckInService } from '../service/check-in.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private checkIn: CheckInService, private router: Router) {}
  canActivate(): boolean {
    if (this.checkIn.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
