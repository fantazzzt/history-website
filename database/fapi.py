from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    coin_mints = get_random_coin_sample(sample_size=100)
    return jsonify(coin_mints)

@app.route('/search_year', methods=['GET'])
def search_by_year():
    year = request.args.get('year')
    coins = get_coins_by_year(year)
    return jsonify(coins)

@app.route('/coin/<int:coin_id>', methods=['GET'])
def get_coin_details(coin_id):
    coin = get_coin_by_id(coin_id)
    return jsonify(coin)

@app.route('/mint', methods=['GET'])
def get_coins_by_mint():
    mint = request.args.get('mint')
    coins = get_all_coins_by_mint(mint)
    return jsonify(coins)

def get_random_coin_sample(sample_size):
    conn = sqlite3.connect('C:/Users/masse/aoe2stuff/historyweb/database/coin.db', check_same_thread=False)
    cursor = conn.cursor()
    query = "SELECT cg_mint FROM Coingroups LIMIT " + str(sample_size)
    cursor.execute(query)
    coin_mints = cursor.fetchall()
    coin_mints = [coin for coin in coin_mints if coin[0]]  
    conn.close()
    return coin_mints

def get_coins_by_year(year):
    conn = sqlite3.connect('C:/Users/masse/aoe2stuff/historyweb/database/coin.db', check_same_thread=False)
    cursor = conn.cursor()
    query = f"SELECT * FROM Coingroups WHERE cg_start_year <= {year} AND cg_end_year >= {year}"
    cursor.execute(query)
    coins = cursor.fetchall()
    conn.close()
    return coins

def get_coin_by_id(coin_id):
    conn = sqlite3.connect('C:/Users/masse/aoe2stuff/historyweb/database/coin.db', check_same_thread=False)
    cursor = conn.cursor()
    query = f"SELECT * FROM Coingroups WHERE cgID = {coin_id}"
    cursor.execute(query)
    coin = cursor.fetchone()
    conn.close()
    return coin

def get_all_coins_by_mint(mint):
    conn = sqlite3.connect('C:/Users/masse/aoe2stuff/historyweb/database/coin.db', check_same_thread=False)
    cursor = conn.cursor()
    query = f"SELECT * FROM Coingroups WHERE cg_mint = '{mint}'"
    cursor.execute(query)
    coins = cursor.fetchall()
    conn.close()
    return coins

if __name__ == '__main__':
    app.run()
