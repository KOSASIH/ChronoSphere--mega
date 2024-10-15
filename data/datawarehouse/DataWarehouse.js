import { createClient } from 'snowflake-sdk';

class DataWarehouse {
  async connect() {
    const client = createClient({
      account: 'chronosphere',
      username: 'root',
      password: 'password',
    });
    return client;
  }

  async query(sql) {
    const client = await this.connect();
    const results = await client.execute({
      sqlText: sql,
    });
    return results;
  }

  async close() {
    const client = await this.connect();
    await client.close();
  }
}

export default new DataWarehouse();
