import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Amplify from 'aws-amplify';

import { environment } from '../../environments/environment';

console.log(environment.amplifyConfig);

Amplify.configure(environment.amplifyConfig);

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AmplifyModule {}
