import { createPool } from 'pg';

class PostgreSQLDatabase extends Database {
  async connect() {
    const pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'chronosphere',
      dialect: 'postgres',
    });
    return pool;
  }
}

export default new PostgreSQLDatabase();
