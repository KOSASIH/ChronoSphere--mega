import requests
from bs4 import BeautifulSoup
import pandas as pd

class DataExtractor:
    def __init__(self, config):
        self.config = config

    def extract(self, url):
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses
        soup = BeautifulSoup(response.content, 'html.parser')
        data = []
        for row in soup.find_all('tr'):
            cols = row.find_all('td')
            data.append([col.text.strip() for col in cols])
        return pd.DataFrame(data, columns=self.config.column_names)
