import os

class Config:
    def __init__(self):
        self.source_urls = ['http://example.com/data1', 'http://example.com/data2']
        self.column_names = ['date', 'value', 'feature1', 'feature2']
        self.database_uri = 'mongodb://localhost:27017/'
        self.database_name = 'chronosphere'
        self.collection_name = 'data'
