import { GoodreadsApiFetcher } from "./goodreads-api-fetcher";
import { Book } from "./book";
import { Bookshelf } from "./bookshelf";
import { BookXmlParser } from "./book-xml-parser";
import { BookshelfBuilder } from "./bookshelf-builder";
import { BaseBookshelf } from "./base-bookshelf";

export class GoodreadsBookshelf implements Bookshelf{
  private _bookshelfBuilder: BookshelfBuilder;
  private _bookshelf: Bookshelf;

  constructor(id: string, key: string, version: number = 2, perPage: number = 2, page: number = 1) {
    const apiFetcher = new GoodreadsApiFetcher(id, key, version, perPage, page)
    const dataParser = new BookXmlParser();
    this._bookshelfBuilder = new BookshelfBuilder(apiFetcher, dataParser);
    this._bookshelf = new BaseBookshelf([])
  }

  async getBooks(): Promise<void> {
    this._bookshelf = await this._bookshelfBuilder.build();
  }

  readBooks(): Book[] {
    return this._bookshelf.readBooks();
  }
  readingBooks(): Book[] {
    return this._bookshelf.readingBooks();
  }
  readBooksGroupedByYear(): { [key: number]: Book[]; } {
    return this._bookshelf.readBooksGroupedByYear();
  }

}