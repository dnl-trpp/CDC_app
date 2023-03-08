from flask import Flask
import requests

server = Flask(__name__)

@server.route('/')
def main():
    response = '<div>   Hello from Warehouse Api!</div>'
    res = requests.get("http://catalog_api:8000")
    response += str(res.status_code)
    return response


if __name__ == '__main__':
    server.run()