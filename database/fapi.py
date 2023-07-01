from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import matplotlib.pyplot as plt
from io import BytesIO
import sqlite3
import requests

app = FastAPI()
templates = Jinja2Templates(directory="templates")


@app.get("/")
def index(request: Request):
    return templates.TemplateResponse("economy.html", {"request": request})

@app.get("/generate_histogram")
def generate_histogram_route():
    sample_size = 100
    coin_mints = get_random_coin_sample(sample_size)

    plt.hist(coin_mints, bins=10)
    plt.xlabel("cg_mint")
    plt.ylabel("Frequency")
    plt.title("Histogram of cg_mint")

    plt.savefig("static/histogram.png")
    plt.close()

    return "Histogram generated successfully!"

def get_random_coin_sample(sample_size):
    response = requests.get(f"http://localhost:8000/coin?sample_size={sample_size}")
    data = response.json()
    coin_mints = []
    for coin in data:
        if coin.get("cg_mint"):
            coin_mints.append(coin["cg_mint"])
    return coin_mints


def generate_histogram(sample_size):
    coin_mints = get_random_coin_sample(sample_size)

    plt.hist(coin_mints, bins=10)
    plt.xlabel("cg_mint")
    plt.ylabel("Frequency")
    plt.title("Histogram of cg_mint")
    plt.show()
