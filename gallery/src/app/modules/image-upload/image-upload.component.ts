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

  get canSave() {
    return (this.image && this.imageForm && true) || false;
  }

  addImage(image: image) {
    this.image = image;
  }

  formChange(values: imageForm) {
    this.imageForm = values;
  }

  save() {
    console.log('saved');
  }
}
