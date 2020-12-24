# Goodreads Bookshelf

[![Build Status](https://travis-ci.com/brombaut/goodreads-bookshelf.svg?branch=main)](https://travis-ci.com/brombaut/goodreads-bookshelf)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/brombaut/goodreads-bookshelf/coverage.svg?style=flat-square)](https://codecov.io/gh/brombaut/goodreads-bookshelf/)
![npm](https://img.shields.io/npm/v/goodreads-bookshelf?color=blue)
![David](https://img.shields.io/david/brombaut/goodreads-bookshelf)

## Install

```bash
npm i goodreads-bookshelf
```

## Usage

You will need to provide your own [Goodreads API](https://www.goodreads.com/api) developer ID and key.

```typescript
import { GoodreadsBookshelf, Book, Shelf } from "goodreads-bookshelf";

const myBookshelf: GoodreadsBookshelf =
  new GoodreadsBookshelf(<Goodread Id>, <Goodreads Key>);
await myBookshelf.getBooks();
const myReadingBooks: Book[] = myBookshelf.readingBooks();
const myReadBooks: Book[] = myBookshelf.readBooks();
const groupedByYear: { [key: number]: Book[] } = myBookshelf.readBooksGroupedByYear();

```
