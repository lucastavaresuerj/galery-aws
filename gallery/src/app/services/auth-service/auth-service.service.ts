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
          email,
        },
      });
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async confirmSignUp(username: string, code: string) {
    try {
      await Auth.confirmSignUp(username, code);
      this.isAuthenticated = true;
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async resendConfirmationCode(username: string) {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  async signIn({ username, password }: any) {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      return user;
      // this.isAuthenticated = true;
    } catch (error: any) {
      console.log('error signing in', error);
      if (error.name == 'UserNotConfirmedException') {
        throw error;
      }
    }
  }
}
