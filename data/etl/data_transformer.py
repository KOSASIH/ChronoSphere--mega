import pandas as pd
from sklearn.preprocessing import StandardScaler

class DataTransformer:
    def __init__(self, config):
        self.config = config

    def transform(self, raw_data):
        # Perform data cleaning and feature engineering
        data = raw_data.copy()
        data['date'] = pd.to_datetime(data['date'])
        data['value'] = data['value'].astype(float)
        scaler = StandardScaler()
        data[['feature1', 'feature2']] = scaler.fit_transform(data[['feature1', 'feature2']])
        return data
