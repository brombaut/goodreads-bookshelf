import { BookXmlParser } from './../book-xml-parser';
import { BookDataFileReader } from '../book-data-file-reader';

describe('BookXmlParser class', () => {
  const GR_RESPONSE_FILE = './__tests__/goodreads-response.xml';
  const EXPCTED_RESULT = [
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
      shelf: 'to-read',
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
      shelf: 'currently-reading',
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
      shelf: 'read',
    },
    {
      title: 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
      author: 'Gene Kim',
      isbn13: '9780988262591',
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361113128l/17255186._SX98_.jpg',
      link: 'https://www.goodreads.com/book/show/17255186-the-phoenix-project',
      dateStarted: 'Wed May 13 05:16:07 -0700 2020',
      dateFinished: '',
      rating: '0',
      shelf: 'to-read',
    },
  ];
  let rawData: string;
  let bxp: BookXmlParser;

  beforeAll(async () => {
    const bdfr: BookDataFileReader = new BookDataFileReader(GR_RESPONSE_FILE);
    rawData = await bdfr.fetch();
  });

  beforeEach(async () => {
    bxp = new BookXmlParser();
  });

  it('successfully parses Goodreads reviews xml', () => {
    return bxp.parse(rawData);
  });

  it('parses the correct number of books', () => {
    return bxp.parse(rawData).then(() => {
      expect(bxp.booklist()).toHaveLength(4);
    });
  });

  it('done flag is set correctly', () => {
    expect(bxp.done()).toBeFalsy();
    return bxp.parse(rawData).then(() => {
      expect(bxp.done()).toBeTruthy();
    });
  });

  it('parses the expected result', () => {
    expect(bxp.done()).toBeFalsy();
    return bxp.parse(rawData).then(() => {
      const result = bxp.booklist();
      expect(result).toEqual(EXPCTED_RESULT);
    });
  });
});
