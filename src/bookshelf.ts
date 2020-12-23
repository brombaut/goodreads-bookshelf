import { Book } from './book';

export interface Bookshelf {
  readBooks(): Book[];

  readingBooks(): Book[];

  readBooksGroupedByYear(): { [key: number]: Book[] };
}
