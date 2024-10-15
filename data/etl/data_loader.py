import pymongo

class DataLoader:
    def __init__(self, config):
        self.config = config
        self.client = pymongo.MongoClient(self.config.database_uri)
        self.db = self.client[self.config.database_name]
        self.collection = self.db[self.config.collection_name]

    def load(self, transformed_data):
        self.collection.insert_many(transformed_data.to_dict('records'))
