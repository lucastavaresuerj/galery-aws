import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { S3Service } from 'src/app/services/s3/s3.service';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
})
export class InputImageComponent implements OnInit, OnDestroy {
  image!: image;

  @Output() addImage = new EventEmitter<image>();

  constructor(private s3: S3Service) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    URL.revokeObjectURL(this.image.src);
  }

  onSave() {
    this.s3.upload(this.image.file);
  }

  dragOver(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  dropFile(event: DragEvent) {
    event.preventDefault();
    const file = event?.dataTransfer?.files[0];
    this.uploadImage(file);
  }

  handleInput(event: Event) {
    console.log(event);
    const file = (event.target as HTMLInputElement).files?.[0];
    this.uploadImage(file);
  }

  uploadImage(image: File | undefined) {
    if (image) {
      this.image = { file: image, src: URL.createObjectURL(image) };
    }
    this.addImage.emit(this.image);
    console.log(image);
  }
}
