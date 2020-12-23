import { BookDTO } from './book-dto';

export interface BookDataParser {
  booklist(): BookDTO[];
  parse(rawData: string): Promise<void>;
  done(): boolean;
}
