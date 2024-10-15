import { createReadStream } from 'fs';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

class ETL {
  async extract(data) {
    const readStream = createReadStream(data);
    return readStream;
  }

  async transform(data) {
    const transformedData = await this.applyTransformations(data);
    return transformedData;
  }

  async load(data) {
    const writeStream = createWriteStream('output.csv');
    await pipeline(data, writeStream);
  }

  async applyTransformations(data) {
    const transformations = await this.getTransformations();
    const transformedData = await transformations.apply(data);
    return transformedData;
  }

  async getTransformations() {
    const transformations = await import('transformations');
    return transformations;
  }
}

export default new ETL();
