import { BookDataFetcher } from './book-data-fetcher';
import { BookDataParser } from './book-data-parser';
import { BaseBookshelf } from './base-bookshelf';
import { Book } from './book';
import { BookDTO } from './book-dto';

export class BookshelfBuilder {
  private _dataFetcher: BookDataFetcher;

  private _dataParser: BookDataParser;

  constructor(fetcher: BookDataFetcher, parser: BookDataParser) {
    this._dataFetcher = fetcher;
    this._dataParser = parser;
  }

  async build(): Promise<BaseBookshelf> {
    while (!this._dataParser.done()) {
      const rawData: string = await this._dataFetcher.fetch();
      this._dataFetcher.incrementPage();
      await this._dataParser.parse(rawData);
    }
    const jsonBooks: BookDTO[] = this._dataParser.booklist();
    const books: Book[] = [];
    jsonBooks.forEach((bj: BookDTO) => {
      books.push(new Book(bj));
    });
    return new BaseBookshelf(books);
  }
}
