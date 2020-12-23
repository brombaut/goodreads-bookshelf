import { Book } from './book';
import { Bookshelf } from "./bookshelf";
import { Shelf } from './shelf';

export class BaseBookshelf implements Bookshelf{
  private _books: Book[];

  constructor(books: Book[]) {
    this._books = books;
  }

  public readBooks(): Book[] {
    return this._books.filter((book: Book) => book.shelf() === Shelf.READ).sort(this.sortRecentlyFinishedBooksFirst);
  }

  public readingBooks(): Book[] {
    return this._books
      .filter((book: Book) => book.shelf() === Shelf.CURRENTLYREADING)
      .sort(this.sortRecentlyStartedBooksFirst);
  }

  public readBooksGroupedByYear(): { [key: number]: Book[] } {
    const yearlyBooks: { [key: number]: Book[] } = {};
    this.readBookYears().forEach((year: number) => {
      yearlyBooks[year] = [];
    });
    this.readBooks().forEach((book: Book) => {
      yearlyBooks[book.yearFinished()].push(book);
    });
    return yearlyBooks;
  }

  private readBookYears(): number[] {
    const years: number[] = [];
    this.readBooks().forEach((book: Book) => {
      const shouldAdd: boolean = !Number.isNaN(book.yearFinished()) && !years.includes(book.yearFinished());
      if (shouldAdd) {
        years.push(book.yearFinished());
      }
    });
    return years.sort((a: number, b: number) => {
      return a - b;
    });
  }

  private sortRecentlyFinishedBooksFirst(a: Book, b: Book): number {
    return b.dateFinished().getTime() - a.dateFinished().getTime();
  }

  private sortRecentlyStartedBooksFirst(a: Book, b: Book): number {
    return b.dateStarted().getTime() - a.dateStarted().getTime();
  }
}
