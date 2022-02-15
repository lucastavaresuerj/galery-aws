//Core
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Pipes
import { SafeUrlPipe } from 'src/app/pipes/safe-resource-url/safe-resource-url';

// Services
import { ImageService } from 'src/app/services/image/image.service';

// Components
import { ImageUploadComponent } from './image-upload.component';
import { InputImageComponent } from './input-image/input-image.component';

const exports: (any[] | Type<any>)[] | undefined = [ImageUploadComponent];

@NgModule({
  declarations: [
    ...exports,
    ImageUploadComponent,
    InputImageComponent,
    SafeUrlPipe,
  ],
  exports: exports,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [ImageService],
})
export class ImageUploadModule {}
