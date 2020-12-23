import { BookDataParser } from "./../book-data-parser";
import { BookshelfBuilder } from "./../bookshelf-builder";
import { BookDataFetcher } from "./../book-data-fetcher";
import { BookDataFileReader } from "../book-data-file-reader";
import { BookXmlParser } from "../book-xml-parser";
import { Bookshelf } from "../bookshelf";

describe('BookshelfBuilder class', () => {
  const GR_RESPONSE_FILE = './__tests__/goodreads-response.xml';

  let bookshelfBuilder: BookshelfBuilder;

  beforeAll(async () => {
    const bdfr: BookDataFetcher = new BookDataFileReader(GR_RESPONSE_FILE);
    const bxp: BookDataParser = new BookXmlParser();
    bookshelfBuilder = new BookshelfBuilder(bdfr, bxp)
  });

  it('successfully constructs a BookshelfBuilder', () => {
    expect(bookshelfBuilder).toBeInstanceOf(BookshelfBuilder);
  });

  it('succesfully builds a bookshelf', () => {
    return bookshelfBuilder.build().then((result: Bookshelf) => {
      expect(result).toBeInstanceOf(Bookshelf);
    })
  });
});