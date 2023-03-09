from flask import Flask
import requests
import mysql.connector

server = Flask(__name__)

@server.route('/')
def main():

    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'CDC'
    }
    db = mysql.connector.connect(**config)

    cursor = db.cursor()
    cursor.execute("SELECT * from products")
    result = cursor.fetchall()


    response = '<div>   Hello from Warehouse Api!</div>'
    res = requests.get("http://catalog_api:8000")
    response += str(res)

    for x in result:
        response += str(x)+'\n'
    cursor.close()
    db.close()
    return response


if __name__ == '__main__':
    server.run()