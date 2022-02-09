import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService implements CanActivate {
  isAuthenticated = false;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth']);
    }
    return this.isAuthenticated;
  }

  async signUp({ username, password, email }: any) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          // other custom attributes
        },
      });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async confirmSignUp({ username, code }: any) {
    try {
      await Auth.confirmSignUp(username, code);
      this.isAuthenticated = true;
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async signIn({ username, password }: any) {
    try {
      const user = await Auth.signIn(username, password);
      this.isAuthenticated = true;
    } catch (error) {
      console.log('error signing in', error);
    }
  }
}
