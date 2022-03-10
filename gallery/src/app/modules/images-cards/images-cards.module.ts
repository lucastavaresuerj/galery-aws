import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import { ImagesCardsComponent } from './images-cards.component';

@NgModule({
  declarations: [ImageCardComponent, ImagesCardsComponent],
  imports: [CommonModule],
  exports: [ImagesCardsComponent],
})
export class ImagesCardsModule {}
