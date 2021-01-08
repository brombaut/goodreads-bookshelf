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
    jest.setTimeout(15000);
    expect.assertions(1);
    return gaf.fetch().then((data: string) => {
      expect(data).toBeDefined();
    });
  });

  it('Gives a good error when the api request fails', () => {
    jest.setTimeout(15000);
    expect.assertions(1);
    const failedGaf: GoodreadsApiFetcher = 
      new GoodreadsApiFetcher(`${goodreadsconfig.id}_WRONG`, `${goodreadsconfig.key}_WRONG`);
    expect.assertions(1);
    return failedGaf.fetch().catch((err: string) => {
      expect(err).toBeTruthy()
    });
  });
});
