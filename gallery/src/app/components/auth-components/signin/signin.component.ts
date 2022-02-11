import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { Router } from '@angular/router';

type Alert = {
  type: string;
  message: string;
};

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  isUserNotConfirmed = false;
  isUserNotFound = false;
  hasSendSignin = false;
  alerts: Alert[] = [];

  constructor(private auth: AuthServiceService, private router: Router) {}

  async onSubmit() {
    this.hasSendSignin = true;
    try {
      await this.auth.signIn(this.form.value);
      this.router.navigateByUrl('/');
    } catch (err: any) {
      if (err.name == 'UserNotConfirmedException') {
        this.isUserNotConfirmed = true;
        this.addAlert({
          type: 'warning',
          message: "You don't confirm your code send to your e-mail",
        });
      }
      if (err.name == 'UserNotFoundException') {
        this.isUserNotFound = true;
        this.addAlert({ type: 'warning', message: 'User not found' });
      }
      console.error(err);
    }
    this.hasSendSignin = true;
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  addAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnInit(): void {}
}
