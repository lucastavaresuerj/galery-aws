import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyModule } from './amplify/amplify.module';

import { SafeUrlPipe } from './pipes/safe-resource-url/safe-resource-url';

import { AuthComponentsModule } from './components/auth-components/auth-components.module';
import { InputImageComponent } from './components/input-image/input-image.component';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { AuthServiceService } from './services/auth-service/auth-service.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeUrlPipe,
    AuthPageComponent,
    MainPageComponent,
    InputImageComponent,
    NavComponent,
  ],
  imports: [
    AmplifyModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthComponentsModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
