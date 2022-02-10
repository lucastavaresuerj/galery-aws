import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

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
      password: new FormControl('', [Validators.required, Validators.min(8)]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.min(8),
      ]),
    },
    { validators: this.checkPassword }
  );

  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}

  checkPassword(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password?.value == confirmPassword?.value
      ? null
      : { checkPassword: false };
  }

  async onSubmit() {
    console.log(this.form);

    try {
      await this.auth.signUp(this.form.value);
      this.router.navigate(['/auth'], {
        queryParams: { confirmSignUp: 'true', email: this.form.value.email },
      });
    } catch (err) {
      console.error(err);
    }
  }
}
