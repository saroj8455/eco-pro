import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  constructor() {}

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
