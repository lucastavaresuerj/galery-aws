import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  image!: image;
  imageForm!: imageForm;

  constructor() {}

  ngOnInit(): void {}

  addImage(image: image) {
    this.image = image;
    console.log(image);
  }

  formChange(values: imageForm) {
    this.imageForm = values;
    console.log(values);
  }
}
