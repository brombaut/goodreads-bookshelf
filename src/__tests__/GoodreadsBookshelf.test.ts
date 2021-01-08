import { GoodreadsBookshelf } from './../goodreads-bookshelf';
import goodreadsconfig from '../config/goodreads-config';
import { Book } from '../book';

describe('GoodreadsApiFetcher class', () => {
  let gb: GoodreadsBookshelf;

  beforeEach(async () => {
    gb = new GoodreadsBookshelf(goodreadsconfig.id, goodreadsconfig.key);
  });

  it('successfully constructs a GoodreadsBookshelf', () => {
    expect(gb).toBeInstanceOf(GoodreadsBookshelf);
  });

  it('successfully builds a bookshelf', async () => {
    jest.setTimeout(15000);
    await gb.getBooks();
    expect(gb.readBooks()).not.toHaveLength(0);
    gb.readBooks().forEach((book: Book) => {
      expect(book).toBeInstanceOf(Book);
    });
    gb.readingBooks().forEach((book: Book) => {
      expect(book).toBeInstanceOf(Book);
    });

    const groupedByYear: { [key: number]: Book[] } = gb.readBooksGroupedByYear();
    expect(groupedByYear).toBeDefined();
  });
});
