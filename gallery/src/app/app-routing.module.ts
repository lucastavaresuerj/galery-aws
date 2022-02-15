import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';

import { AuthService } from 'src/app/services/auth-service/auth.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'upload',
    component: UploadPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
