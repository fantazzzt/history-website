from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    coin_mints = get_random_coin_sample(sample_size=10)
    return jsonify(coin_mints)

def get_random_coin_sample(sample_size):
    coin_mints = [
        {"cg_mint": "Mint 1"},
        {"cg_mint": "Mint 2"},
        {"cg_mint": "Mint 3"}
    ]
    return coin_mints

if __name__ == '__main__':
    app.run()
