import { v4 as uuidv4 } from 'uuid';
import { createHash } from 'crypto';
import { performance } from 'perf_hooks';

class DataStorage {
  async storeData(data) {
    const startTime = performance.now();
    const storedData = await this.writeDataToFile(data);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime}ms`);
    return storedData;
  }

  async retrieveData() {
    const startTime = performance.now();
    const retrievedData = await this.readDataFromFile();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime}ms`);
    return retrievedData;
  }

  async writeDataToFile(data) {
    const hash = createHash('sha256');
    hash.update(data);
    const hashedData = hash.digest('hex');
    const storedData = await this.applyDataStorage(hashedData);
    return storedData;
  }

  async readDataFromFile() {
    const retrievedData = await this.applyDataRetrieval();
    return retrievedData;
  }

  async applyDataStorage(hashedData) {
    const storageModel = await this .loadDataStorageModel();
    const storedData = await storageModel.store(hashedData);
    return storedData;
  }

  async applyDataRetrieval() {
    const retrievalModel = await this.loadDataRetrievalModel();
    const retrievedData = await retrievalModel.retrieve();
    return retrievedData;
  }

  async loadDataStorageModel() {
    const model = await import('data-storage-model');
    return model;
  }

  async loadDataRetrievalModel() {
    const model = await import('data-retrieval-model');
    return model;
  }
}

export default new DataStorage();
