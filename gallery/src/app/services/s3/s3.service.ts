import { Injectable } from '@angular/core';
import { Storage } from 'aws-amplify';

type level = 'private' | 'public';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  constructor() {}

  async upload(file: File, config?: { level?: level; name?: string }) {
    try {
      await Storage.put(config?.name || file.name, file, {
        level: config?.level || 'private',
      });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }
}
