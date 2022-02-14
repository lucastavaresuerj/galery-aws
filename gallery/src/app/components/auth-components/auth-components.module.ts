import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmSignupComponent } from './confirm-signup/confirm-signup.component';
import { FieldErrorComponent } from './field-error/field-error.component';

const declarations = [SigninComponent, SignupComponent, ConfirmSignupComponent];

@NgModule({
  declarations: [...declarations, FieldErrorComponent],
  exports: declarations,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgbAlertModule],
})
export class AuthComponentsModule {}
