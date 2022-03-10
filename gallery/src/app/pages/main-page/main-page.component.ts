import { Component, OnInit } from '@angular/core';
import { S3Service } from 'src/app/services/s3/s3.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  images!: imageData[];

  constructor(private s3Service: S3Service) {}

  ngOnInit(): void {
    this.getImages();
  }

  async getImages() {
    const imageList = await this.s3Service.listFiles('resized', {
      level: 'protected',
    });
    const images = await Promise.all(
      imageList.map(async ({ key }) => {
        if (!key) return;
        const signedURL = await this.s3Service.getFile(key, {
          level: 'protected',
        });
        return { signedURL };
      })
    );
    this.images = images.filter(
      (image) => typeof image != 'undefined'
    ) as imageData[];
  }
}
