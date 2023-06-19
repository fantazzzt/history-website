import csv
import sqlite3

db_file = 'coin.db'

conn = sqlite3.connect(db_file)
cursor = conn.cursor()


create_table_query = 'CREATE TABLE Coingroups (id INTEGER PRIMARY KEY);'
cursor.execute(create_table_query)


with open('C:/Users/masse/aoe2stuff/historyweb/database/coin_groups.csv', 'r') as file:
    reader = csv.reader(file)

    column_titles = next(reader)

    column_names = ', '.join(column_titles)
    placeholders = ', '.join(['?'] * len(column_titles))

    alter_table_query = f"ALTER TABLE Coingroups RENAME TO Old_Coingroups;"
    cursor.execute(alter_table_query)

    create_table_query = f"CREATE TABLE Coingroups ({column_names});"
    cursor.execute(create_table_query)

    insert_query = f"INSERT INTO Coingroups VALUES ({placeholders});"
    cursor.executemany(insert_query, reader)

    drop_table_query = "DROP TABLE Old_Coingroups;"
    cursor.execute(drop_table_query)

    conn.commit()

conn.close()
