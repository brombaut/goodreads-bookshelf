export interface BookDataFetcher {
  fetch(): Promise<string>;
  incrementPage(): void;
}
