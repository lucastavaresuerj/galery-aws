import { Injectable } from '@angular/core';
import { S3ProviderListConfig } from '@aws-amplify/storage';
import { Storage } from 'aws-amplify';

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

  async listFiles(search: string = '', config?: S3ProviderListConfig) {
    try {
      const filesList = await Storage.list(search, {
        level: config?.level || 'public',
      });
      return filesList;
    } catch (error) {
      throw error;
    }
  }

  async getFile(key: string, config?: any) {
    try {
      const file = await Storage.get(key, { level: config?.level || 'public' });
      return file;
    } catch (error) {
      throw error;
    }
  }
}
