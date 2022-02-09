import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmSigninComponent } from './confirm-signin/confirm-signin.component';

const declarations = [SigninComponent, SignupComponent, ConfirmSigninComponent];

@NgModule({
  declarations: [...declarations],
  exports: declarations,
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthComponentsModule {}
