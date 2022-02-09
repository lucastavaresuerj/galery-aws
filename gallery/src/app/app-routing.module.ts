import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthServiceService],
  },
  {
    path: 'auth',
    component: AuthPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
