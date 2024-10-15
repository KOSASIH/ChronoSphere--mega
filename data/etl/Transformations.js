class Transformations {
  async apply(data) {
    const transformedData = await this.applyMapping(data);
    return transformedData;
  }

  async applyMapping(data) {
    const mapping = await this.getMapping();
    const mappedData = await mapping.apply(data);
    return mappedData;
  }

  async getMapping() {
    const mapping = await import('mapping');
    return mapping;
  }
}

export default new Transformations();
