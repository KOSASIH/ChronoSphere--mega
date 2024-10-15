class Mapping {
  async apply(data) {
    const mappedData = await this.applyColumnMapping(data);
    return mappedData;
  }

  async applyColumnMapping(data) {
    const columnMapping = await this.getColumnMapping();
    const mappedData = await columnMapping.apply(data);
    return mappedData;
  }

  async getColumnMapping() {
    const columnMapping = await import('column-mapping');
    return columnMapping;
  }
}

export default new Mapping();
