import { Component, OnDestroy, OnInit } from '@angular/core';
import { S3Service } from 'src/app/services/s3/s3.service';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
})
export class InputImageComponent implements OnInit, OnDestroy {
  image!: { file: File; src: string };

  constructor(private s3: S3Service) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    URL.revokeObjectURL(this.image.src);
  }

  onSave() {
    this.s3.upload(this.image.file);
  }

  handleInput(event: Event) {
    const files = (<HTMLInputElement>event.target).files;
    if (files) {
      this.image = { file: files[0], src: URL.createObjectURL(files[0]) };
    }
    console.log(files);
  }
}
