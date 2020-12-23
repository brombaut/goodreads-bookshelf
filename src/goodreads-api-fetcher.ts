import { BookDataFetcher } from "./book-data-fetcher";

export class GoodreadsApiFetcher implements BookDataFetcher {
  private _version;
  private _key;
  private _id: string;
  private _perPage;
  private _page;

  constructor(id: string, key: string, version: number = 2, perPage: number = 2, page: number = 1) {
    this._id = id;
    this._key = key;
    this._version = version;
    this._perPage = perPage;
    this._page = page;
  }

  async fetch() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return fetch(`${proxyUrl}${this.url}`).then(res => res.text());
  }

  incrementPage(): void {
    this._page++;
  }

  private get url() {
    return `https://www.goodreads.com/review/list?v=${this._version}&key=${this._key}&id=${this._id}&per_page=${this._perPage}&page=${this._page}`;
  }
}