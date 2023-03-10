from flask import Flask

server = Flask(__name__)

@server.route('/')
def main():
    response = '<h1 style="text-align:center" > Hello from Purchase and Refund Api! </h1>'
    return response


if __name__ == '__main__':
    server.run()