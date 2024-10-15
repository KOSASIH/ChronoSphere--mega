import logging
import os
import concurrent.futures
from data_extractor import DataExtractor
from data_transformer import DataTransformer
from data_loader import DataLoader
from config import Config
from utils import Timer, Logger

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def main():
    try:
        # Load configuration
        config = Config()

        # Create a timer for performance monitoring
        timer = Timer()

        # Extract data in parallel using multiple threads
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            futures = [executor.submit(DataExtractor(config).extract, url) for url in config.source_urls]
            raw_data = [future.result() for future in concurrent.futures.as_completed(futures)]

        # Transform data using a distributed computing framework (e.g., Dask)
        from dask.distributed import Client
        client = Client(n_workers=10, threads_per_worker=2)
        transformed_data = client.map(DataTransformer(config).transform, raw_data).compute()

        # Load data into a cloud-based NoSQL database (e.g., MongoDB)
        loader = DataLoader(config)
        loader.load(transformed_data)

        logger.info(f"ETL process completed in {timer.elapsed:.2f} seconds.")

    except Exception as e:
        logger.error(f"ETL process failed: {e}")

if __name__ == "__main__":
    main()
