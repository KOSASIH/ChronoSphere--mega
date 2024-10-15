import { v4 as uuidv4 } from 'uuid';
import { createHash } from 'crypto';
import { performance } from 'perf_hooks';

class ChronoUtils {
  async convertTimezone(date, fromTimezone, toTimezone) {
    const startTime = performance.now();
    const convertedDate = await this.applyTimezoneOffset(date, fromTimezone, toTimezone);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`Execution time: ${executionTime}ms`);
    return convertedDate;
  }

  async applyTimezoneOffset(date, fromTimezone, toTimezone) {
    const offset = await this.calculateTimezoneOffset(fromTimezone, toTimezone);
    const convertedDate = new Date(date.getTime() + offset);
    return convertedDate;
  }

  async calculateTimezoneOffset(fromTimezone, toTimezone) {
    const fromOffset = await this.getTimezoneOffset(fromTimezone);
    const toOffset = await this.getTimezoneOffset(toTimezone);
    const offset = toOffset - fromOffset;
    return offset;
  }

  async getTimezoneOffset(timezone) {
    const offset = await this.lookupTimezoneOffset(timezone);
    return offset;
  }

  async lookupTimezoneOffset(timezone) {
    const offset = await this.queryTimezoneDatabase(timezone);
    return offset;
  }

  async queryTimezoneDatabase(timezone) {
    const db = await import('timezone-database');
    const offset = await db.query(`SELECT offset FROM timezones WHERE name = ?`, timezone);
    return offset;
  }
}

export default new ChronoUtils();
