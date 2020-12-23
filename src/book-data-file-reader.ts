import fs = require('fs');
import path = require('path');
import { BookDataFetcher } from './book-data-fetcher';

export class BookDataFileReader implements BookDataFetcher {
  private _filePath;

  constructor(filePath: string) {
    this._filePath = path.join(__dirname, filePath);
  }

  incrementPage(): void {
    throw new Error('Method not implemented');
  }

  async fetch(): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._filePath, 'utf8', (err, data) => {
        if (err) {
          reject('Could not read file');
        }
        resolve(data);
      });
    });
  }
}
