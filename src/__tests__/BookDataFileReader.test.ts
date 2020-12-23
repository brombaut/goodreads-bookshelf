import { BookDataFileReader } from "./../book-data-file-reader";

describe("Book class", () => {
  const GR_RESPONSE_FILE = './__tests__/goodreads-response.xml';

  let bdfr: BookDataFileReader;

  beforeEach(async () => {
    bdfr = new BookDataFileReader(GR_RESPONSE_FILE);
  })

  it('successfully constructs a BookDataFileReader',() => {
    expect(bdfr).toBeInstanceOf(BookDataFileReader);
  })

  it('throws error when using pagination', () => {
    try {
      bdfr.incrementPage();
    } catch (e) {
      expect(e.message).toBe("Method not implemented");
    }
  })

  it('successfully reads the file', () => {
    expect.assertions(1);
    return bdfr.fetch()
      .then((data: string) => {
        expect(data).toBeDefined()
      });
  });

  it('throws an error with an invalid file', () => {
    const failedBdfr: BookDataFileReader = new BookDataFileReader(`${GR_RESPONSE_FILE}ERROR`);
    expect.assertions(1);
    return failedBdfr.fetch()
      .catch((err: string) => {
        expect(err).toBe("Could not read file");
      });
  });

});
