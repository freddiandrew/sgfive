import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate() {
    if (this.auth.authenticated) {
      // console.log('auth guard', this.auth);
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
    }
  }
}
