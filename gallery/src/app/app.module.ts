// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// External components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Interal modules
import { AppRoutingModule } from './app-routing.module';
import { AmplifyModule } from './amplify/amplify.module';
import { AuthComponentsModule } from './components/auth-components/auth-components.module';
import { ImageUploadModule } from './components/image-upload/image-upload.module';

// Services
import { AuthService } from './services/auth-service/auth.service';
import { S3Service } from './services/s3/s3.service';

// Pages
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { AddImageComponent } from './components/add-image/add-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    MainPageComponent,
    NavComponent,
    SearchComponent,
    AddImageComponent,
    UploadPageComponent,
  ],
  imports: [
    AmplifyModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthComponentsModule,
    ImageUploadModule,
  ],
  providers: [AuthService, S3Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
