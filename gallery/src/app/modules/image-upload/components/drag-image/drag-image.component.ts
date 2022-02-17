import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { S3Service } from 'src/app/services/s3/s3.service';

@Component({
  selector: 'app-drag-image',
  templateUrl: './drag-image.component.html',
  styleUrls: ['./drag-image.component.scss'],
})
export class DragImageComponent implements OnInit, OnDestroy {
  image!: image;

  @Output() imageChange = new EventEmitter<image>();

  constructor(private s3: S3Service) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.image && URL.revokeObjectURL(this.image.src);
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
    const file = (event.target as HTMLInputElement).files?.[0];
    this.uploadImage(file);
  }

  removeImage() {
    this.image = null;
    this.imageChange.emit(this.image);
  }

  uploadImage(image?: File | undefined) {
    if (image) {
      this.image = { file: image, src: URL.createObjectURL(image) };
    }
    this.imageChange.emit(this.image);
  }
}
