import { Bookshelf } from './../bookshelf';
import { BookDTO } from './../book-dto';
import { Book } from '..';
import { Shelf } from '../shelf';

describe('Bookshelf class', () => {
  let bookshelf: Bookshelf;
  beforeEach(async () => {
    bookshelf = new Bookshelf(getBooks());
  });

  it('successfully constructs a Bookshelf', () => {
    expect(bookshelf).toBeInstanceOf(Bookshelf);
  });

  describe('shelf filters', () => {
    it('returns only read books', () => {
      const result: Book[] = bookshelf.readBooks();
      result.forEach((book: Book) => {
        expect(book.shelf()).toBe(Shelf.READ);
      });
    });

    it('returns only readingBooks books', () => {
      const result: Book[] = bookshelf.readingBooks();
      result.forEach((book: Book) => {
        expect(book.shelf()).toBe(Shelf.CURRENTLYREADING);
      });
    });

    it('groups read books by year', () => {
      const result: { [key: number]: Book[] } = bookshelf.readBooksGroupedByYear();
      const keys: string[] = Object.keys(result);
      expect(keys).toHaveLength(2);
      expect(keys[0]).toBe('2019');
      expect(keys[1]).toBe('2020');

      const values: Book[][] = Object.values(result);
      expect(values).toHaveLength(2);
      expect(values[0]).toHaveLength(1);
      expect(values[1]).toHaveLength(1);
    });
  });
});

function getBooks(): Book[] {
  const bookDTOs: BookDTO[] = [
    {
      title:
        'The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations',
      author: 'Gene Kim',
      isbn13: '9781942788003',
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473461230l/26083308._SX98_.jpg',
      link: 'https://www.goodreads.com/book/show/26083308-the-devops-handbook',
      dateStarted: 'Thu Dec 17 13:51:12 -0800 2020',
      dateFinished: '',
      rating: '0',
      shelf: Shelf.TOREAD,
    },
    {
      title: 'The Unicorn Project',
      author: 'Gene Kim',
      isbn13: '9781942788768',
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566877586l/44333183._SX98_.jpg',
      link: 'https://www.goodreads.com/book/show/44333183-the-unicorn-project',
      dateStarted: 'Thu Dec 17 13:48:40 -0800 2020',
      dateFinished: '',
      rating: '0',
      shelf: Shelf.CURRENTLYREADING,
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      isbn13: '',
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420585954l/23692271._SX98_.jpg',
      link: 'https://www.goodreads.com/book/show/23692271-sapiens',
      dateStarted: 'Thu May 21 12:58:48 -0700 2020',
      dateFinished: 'Thu Aug 01 00:00:00 -0700 2019',
      rating: '4',
      shelf: Shelf.READ,
    },
    {
      title: 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
      author: 'Gene Kim',
      isbn13: '9780988262591',
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361113128l/17255186._SX98_.jpg',
      link: 'https://www.goodreads.com/book/show/17255186-the-phoenix-project',
      dateStarted: 'Wed May 13 05:16:07 -0700 2020',
      dateFinished: 'Thu Aug 01 00:00:00 -0700 2020',
      rating: '0',
      shelf: Shelf.READ,
    },
  ];

  const result: Book[] = [new Book(bookDTOs[0]), new Book(bookDTOs[1]), new Book(bookDTOs[2]), new Book(bookDTOs[3])];
  return result;
}
