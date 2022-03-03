import { Component, OnInit } from '@angular/core';
import { S3Service } from 'src/app/services/s3/s3.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  image!: image;
  imageForm!: imageForm;

  constructor(private s3Service: S3Service) {}

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

  async save() {
    if (this.image && this.imageForm) {
      const fileExtension = this.image.file.name.replace(/.+\.(.+)$/g, '$1');
      await this.s3Service.upload(this.image.file, {
        name: `original-size-${this.imageForm.title}.${fileExtension}`,
      });
    }
  }
}
