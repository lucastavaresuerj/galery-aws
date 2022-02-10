import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.scss'],
})
export class ConfirmSignupComponent implements OnInit {
  form = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });
  @Input() username = '';

  constructor(
    private auth: AuthServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  async onSubmit() {
    console.log(this.form.value);
    try {
      await this.auth.confirmSignUp(this.username, this.form.value.code);
      this.router.navigateByUrl('/');
    } catch (err) {
      console.error(err);
    }
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe({
      next: (params) => {
        if (params['resend'] == 'true') {
          this.auth.resendConfirmationCode(this.username);
        }
      },
    });
  }
}
