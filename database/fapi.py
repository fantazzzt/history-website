from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    coin_mints = get_random_coin_sample(sample_size=100)
    return jsonify(coin_mints)


def get_random_coin_sample(sample_size):
    conn = sqlite3.connect('C:/Users/masse/aoe2stuff/historyweb/database/coin.db', check_same_thread=False)
    cursor = conn.cursor()
    query = "SELECT cg_mint FROM Coingroups LIMIT " + str(sample_size)
    cursor.execute(query)
    coin_mints = cursor.fetchall()
    coin_mints = [coin for coin in coin_mints if coin[0]]  
    conn.close()
    return coin_mints

if __name__ == '__main__':
    app.run()
