from fastapi import FastAPI
import sqlite3
from graph import generate_histogram

app = FastAPI()

@app.get("/coin/{coin_id}")
def get_coin(coin_id: int):
    conn = sqlite3.connect('coin.db')
    cursor = conn.cursor()
    cursor.execute("SELECT cgID, cg_num_coins, cg_mint, cg_start_year, Location_ID FROM coin_table WHERE cgID = ?", (coin_id,))
    result = cursor.fetchone()
    conn.close()
    
    if result is None:
        return {"error": "Coin not found"}

    coin_info = {
        "cgID": result[0],
        "cg_num_coins": result[1],
        "cg_mint": result[2],
        "cg_start_year": result[3],
        "Location_ID": result[4],
    }
    
    return coin_info

@app.get("/generate_histogram")
def generate_histogram_route():
    sample_size = 100 
    generate_histogram(sample_size)
    return "Histogram generated successfully!"
