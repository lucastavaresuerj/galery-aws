import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';

type Alert = {
  type: string;
  message: string;
};

type messages = {
  [key: keyof ValidationErrors]: string;
};

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  isUserNotConfirmed = false;
  isUserNotFound = false;
  hasSendSignin = false;
  alerts: Alert[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  get username() {
    const username = this.form.get('username');
    const messages: messages = {
      required: "Username can't be empty",
    };
    const message = this.makeErrorMessage(username?.errors, messages);
    return {
      invalid: username?.status == 'INVALID' && username?.touched,
      message,
    };
  }

  get password() {
    const password = this.form.get('password');
    const messages: messages = {
      required: "Password can't be empty",
      minlength: 'Must have at least 8 characters',
    };
    const message = this.makeErrorMessage(password?.errors, messages);

    return {
      invalid: password?.status == 'INVALID' && password?.touched,
      message,
    };
  }

  async onSubmit() {
    this.hasSendSignin = true;
    if (!this.form.valid) {
      this.addAlert({
        type: 'warning',
        message: 'You must complete all fields to sign in',
      });
      return;
    }
    try {
      await this.auth.signIn(this.form.value);
      this.router.navigateByUrl('/');
    } catch (err: any) {
      if (err.name == 'UserNotConfirmedException') {
        this.isUserNotConfirmed = true;
        this.addAlert({
          type: 'warning',
          message:
            "You didn't confirmed your code yet, please, resend to your e-mail",
        });
      }
      if (err.name == 'UserNotFoundException') {
        this.isUserNotFound = true;
        this.addAlert({ type: 'warning', message: 'User not found' });
      }
      console.error(err);
    }
    this.hasSendSignin = false;
  }

  makeErrorMessage(
    errors: ValidationErrors | null | undefined,
    messages: messages
  ) {
    return errors ? messages[Object.keys(errors)[0]] : '';
  }

  addAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnInit(): void {}
}
