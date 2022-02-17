import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IconButtonComponent } from './components/icon-button/icon-button.component';

// Direcives
import { AutoExpandDirective } from 'src/app/modules/common-components/directives/auto-expand.directive';

const exports = [IconButtonComponent, AutoExpandDirective];

@NgModule({
  declarations: [...exports],
  exports: exports,
  imports: [CommonModule],
})
export class CommonComponentsModule {}
