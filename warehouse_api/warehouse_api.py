from flask import Flask, jsonify,request
import json
import requests
import mysql.connector

server = Flask(__name__)

def connectDb():
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'CDC'
    }
    db = mysql.connector.connect(**config)
    return db


@server.route('/products',methods=['POST'])
def main():

    data = request.get_json(force=True,silent=True)
    if data == None:
        return "Bad Request",400


    if 'name' not in data or 'description' not in data or 'category' not in data or 'price' not in data or 'stock' not in data or 'image_url' not in data:
        return "Bad Request",400


    db = connectDb()
    cursor = db.cursor()

    query = """INSERT INTO products (name, description, category, price, stock, image_url) 
    VALUES ('{name}', '{description}', '{category}', {price}, {stock}, '{image_url}')""".format(
        name = data['name'], 
        description = data['description'],
        category = data['category'],
        price = data['price'],
        stock = data['stock'],
        image_url = data['image_url']
    )
    cursor.execute(query)

    db.commit()

    cursor.close()
    db.close()
    return "OK",200


if __name__ == '__main__':
    server.run()