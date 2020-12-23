import { BookDTO } from "./../book-dto";
import { Book } from '../index';
import { Shelf } from "../shelf";

describe("Book class", () => {
  const bookDto: BookDTO = {
    title: 'Data Mining: Concepts and Techniques',
    author: 'Jiawei Han',
    isbn: '1942788002',
    isbn13: '9781942788003',
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473461230l/26083308._SX98_.jpg',
    smallImageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473461230l/26083308._SY75_.jpg',
    largeImageUrl: '',
    link: 'https://www.goodreads.com/book/show/26083308-the-devops-handbook',
    dateStarted: 'Sat Sep 19 00:00:00 -0700 2020',
    dateFinished: 'Sun Nov 22 00:00:00 -0800 2020',
    rating: '4',
    shelf: Shelf.READ
  }
  it(' successfully builds a book dta',() => {
    const book: Book = new Book(bookDto)
    expect(book).toBeInstanceOf(Book);
  })

})
