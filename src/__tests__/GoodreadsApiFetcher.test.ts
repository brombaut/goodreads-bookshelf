import { GoodreadsApiFetcher } from './../goodreads-api-fetcher';
import goodreadsconfig from '../config/goodreads-config';

describe('GoodreadsApiFetcher class', () => {
  let gaf: GoodreadsApiFetcher;

  beforeEach(async () => {
    gaf = new GoodreadsApiFetcher(goodreadsconfig.id, goodreadsconfig.key);
  });

  it('successfully set env variables', () => {
    expect(goodreadsconfig.id).toBeTruthy();
    expect(goodreadsconfig.key).toBeTruthy();
  });

  it('successfully constructs a BookDataFileReader', () => {
    expect(gaf).toBeInstanceOf(GoodreadsApiFetcher);
  });

  it('successfully hits the goodreads api', () => {
    expect.assertions(1);
    return gaf.fetch().then((data: string) => {
      expect(data).toBeDefined();
    });
  });

  // it('throws an error with an invalid file', () => {
  //   const failedBdfr: BookDataFileReader = new BookDataFileReader(`${GR_RESPONSE_FILE}ERROR`);
  //   expect.assertions(1);
  //   return failedBdfr.fetch().catch((err: string) => {
  //     expect(err).toBe('Could not read file');
  //   });
  // });
});
