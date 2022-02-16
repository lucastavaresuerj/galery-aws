import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IconButtonComponent } from './icon-button/icon-button.component';

const exports = [IconButtonComponent];

@NgModule({
  declarations: [...exports],
  exports: exports,
  imports: [CommonModule],
})
export class CommonComponentsModule {}
