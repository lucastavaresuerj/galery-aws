import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

type messages = { [key: keyof ValidationErrors]: string };

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { validators: this.matchPasswords }
  );
  hasSendSignin = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

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

  get email() {
    const email = this.form.get('email');
    const messages: messages = {
      required: "E-mail can't be empty",
    };
    const message = this.makeErrorMessage(email?.errors, messages);

    return {
      invalid: email?.status == 'INVALID' && email?.touched,
      message,
    };
  }

  get password() {
    const password = this.form.get('password');
    const messages: messages = {
      required: "Password can't be empty",
      minlength: 'Must have at least 8 characters',
      mismatch: 'Booth password must match',
    };
    const message = this.makeErrorMessage(
      { ...password?.errors, ...this.form?.errors },
      messages
    );

    return {
      invalid:
        (this.form?.getError('mismatch') || password?.status == 'INVALID') &&
        password?.touched,
      message,
    };
  }

  get confirmPassword() {
    const confirmPassword = this.form.get('confirmPassword');
    const messages: messages = {
      required: "Confirm password can't be empty",
      minlength: 'Must have at least 8 characters',
      mismatch: 'Booth password must match',
    };
    const message = this.makeErrorMessage(
      { ...confirmPassword?.errors, ...this.form.errors },
      messages
    );

    return {
      invalid:
        (this.form?.getError('mismatch') ||
          confirmPassword?.status == 'INVALID') &&
        confirmPassword?.touched,
      message,
    };
  }

  matchPasswords(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password?.value == confirmPassword?.value
      ? null
      : { mismatch: true };
  }

  makeErrorMessage(
    errors: ValidationErrors | null | undefined,
    messages: messages
  ) {
    return errors ? messages[Object.keys(errors)[0]] : '';
  }

  async onSubmit() {
    console.log(this.form);
    this.hasSendSignin = true;
    try {
      await this.auth.signUp(this.form.value);
      this.router.navigate(['/auth'], {
        queryParams: { confirmSignUp: 'true', user: this.form.value.username },
      });
    } catch (err) {
      console.error(err);
    }
    this.hasSendSignin = false;
  }
}
