import fetch from 'node-fetch';
import { BookDataFetcher } from './book-data-fetcher';

export class GoodreadsApiFetcher implements BookDataFetcher {
  private _version;
  private _key;
  private _id: string;
  private _perPage;
  private _page;

  constructor(id: string, key: string, version: number = 2, perPage: number = 199, page: number = 1) {
    this._id = id;
    this._key = key;
    this._version = version;
    this._perPage = perPage;
    this._page = page;
  }

  async fetch() {
    // NOTE: will have to confirm this works when the client it using it from the browser
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const fullUrl = `${proxyUrl}${this.url}`;
    const payloadHeaders = {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
    let response = await fetch(fullUrl, payloadHeaders);
    if (!response.ok) {
      response = await fetch(fullUrl, payloadHeaders);
      throw new Error('Error making request');
    }
    if (!response.ok) {
      throw new Error('Error making request');
    }

    const body = await response.text();
    return body;
  }

  incrementPage(): void {
    this._page++;
  }

  private get url() {
    return `https://www.goodreads.com/review/list?v=${this._version}&key=${this._key}&id=${this._id}&per_page=${this._perPage}&page=${this._page}`;
  }
}
