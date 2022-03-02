import { Injectable } from '@angular/core';
import { Storage } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  constructor() {}

  async upload(file: File, level: 'private' | 'public') {
    try {
      await Storage.put(file.name, file, {
        level: level,
      });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }
}
