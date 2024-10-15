import { createPool } from 'mysql2/promise';

class MySQLDatabase extends Database {
  async connect() {
    const pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'chronosphere',
      dialect: 'mysql',
    });
    return pool;
  }
}

export default new MySQLDatabase();
