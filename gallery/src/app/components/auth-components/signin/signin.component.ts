import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthServiceService, private router: Router) {}

  async onSubmit() {
    console.log(this.form.value);
    try {
      await this.auth.signIn(this.form.value);
      this.router.navigateByUrl('/');
    } catch (err) {
      console.error(err);
    }
  }

  ngOnInit(): void {}
}
