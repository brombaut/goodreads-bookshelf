// tslint:disable-next-line: no-var-requires
require('dotenv').config();

const goodreadsConfig: { [key: string]: string } = {
  key: process.env.GOODREADS_KEY || '',
  id: process.env.GOODREADS_ID || '',
};

export default goodreadsConfig;
