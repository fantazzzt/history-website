import numpy as np
import matplotlib.pyplot as plt
import requests


def get_random_coin_sample(sample_size):
    response = requests.get(f"http://localhost:8000/coin?sample_size={sample_size}")
    data = response.json()
    coin_mints = [coin["cg_mint"] for coin in data]
    return coin_mints

def generate_histogram(sample_size):
    coin_mints = get_random_coin_sample(sample_size)
    
    plt.hist(coin_mints, bins=10)
    plt.xlabel("cg_mint")
    plt.ylabel("Frequency")
    plt.title("Histogram of cg_mint")
    plt.show()
