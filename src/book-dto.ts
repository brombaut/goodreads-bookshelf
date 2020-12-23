import { Shelf } from './shelf';

export interface BookDTO {
  title: string;
  author: string;
  isbn13: string;
  imageUrl: string;
  link: string;
  dateStarted: string;
  dateFinished: string;
  rating: string;
  shelf: Shelf;
}
