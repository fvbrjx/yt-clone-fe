import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(public auth0:AuthService) { }

  isAuthenticated$():Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  authenticate() {
    this.auth0.loginWithRedirect();
  }

  logout() {
    this.auth0.logout()
  }
}
