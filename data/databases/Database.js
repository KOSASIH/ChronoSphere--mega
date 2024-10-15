import { createPool } from 'mysql2/promise';

class Database {
  async connect() {
    const pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'chronosphere',
    });
    return pool;
  }

  async query(sql, params) {
    const pool = await this.connect();
    const [results] = await pool.execute(sql, params);
    return results;
  }

  async close() {
    const pool = await this.connect();
    await pool.end();
  }
}

export default new Database();
