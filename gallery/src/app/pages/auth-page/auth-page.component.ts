import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  active = 1;
  willConfirmSignUp = false;
  user = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        console.log(params);
        this.willConfirmSignUp = params['confirmSignUp'] == 'true';
        this.user = params['user'];
      },
    });
  }
}
