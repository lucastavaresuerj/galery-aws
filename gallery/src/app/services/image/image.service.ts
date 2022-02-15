import { Injectable } from '@angular/core';

type image = { file: File | undefined | null; src: string };

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private image!: image;

  constructor() {}

  // addImage(file: File | undefined | null) {
  //   this.image = { file: file, src: URL.createObjectURL(file) };
  // }
}
