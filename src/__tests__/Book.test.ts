import { BookDTO } from './../book-dto';
import { Book } from '../index';
import { Shelf } from '../shelf';

describe('Book class', () => {
  const BOOK_TITLE = 'Data Mining: Concepts and Techniques';
  const BOOK_AUTHOR = 'Jiawei Han';
  const BOOK_ISBN13 = '1942788002';
  const BOOK_IMAGE_URL =
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473461230l/26083308._SX98_.jpg';
  const BOOK_LINK = 'https://www.goodreads.com/book/show/26083308-the-devops-handbook';
  const BOOK_DATE_STARTED = 'Sat Sep 19 00:00:00 -0700 2020';
  const BOOK_DATE_FINISHED = 'Sun Nov 22 00:00:00 -0800 2020';
  const BOOK_RATING = '4';
  const BOOK_SHELF = Shelf.READ;

  const bookDto1: BookDTO = {
    title: BOOK_TITLE,
    author: BOOK_AUTHOR,
    isbn13: BOOK_ISBN13,
    imageUrl: BOOK_IMAGE_URL,
    link: BOOK_LINK,
    dateStarted: BOOK_DATE_STARTED,
    dateFinished: BOOK_DATE_FINISHED,
    rating: BOOK_RATING,
    shelf: BOOK_SHELF,
  };

  const bookDto2: BookDTO = {
    ...bookDto1,
    isbn13: '',
  };

  let book1: Book;
  let book2: Book;

  beforeEach(async () => {
    book1 = new Book(bookDto1);
    book2 = new Book(bookDto2);
  });

  it('successfully constructs a Book', () => {
    expect(book1).toBeInstanceOf(Book);
    expect(book2).toBeInstanceOf(Book);
  });

  it('returns correct fields', () => {
    expect(book1.title()).toEqual(BOOK_TITLE);
    expect(book1.author()).toEqual(BOOK_AUTHOR);
    expect(book1.imageUrl()).toEqual(BOOK_IMAGE_URL);
    expect(book1.link()).toEqual(BOOK_LINK);
    expect(book1.rating()).toEqual(BOOK_RATING);
    expect(book1.shelf()).toEqual(BOOK_SHELF);

    expect(book1.localImageUrl()).toEqual(`${BOOK_ISBN13}.jpg`);
    expect(book2.localImageUrl()).toEqual('');

    expect(book1.yearFinished()).toEqual(2020);
    expect(book1.dateFinished()).toBeInstanceOf(Date);
    expect(book1.dateStarted()).toBeInstanceOf(Date);
  });
});
