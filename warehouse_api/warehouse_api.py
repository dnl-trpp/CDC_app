from flask import Flask

server = Flask(__name__)

@server.route('/')
def main():
    response = '<div>   Hello! </div>'
    return response


if __name__ == '__main__':
    server.run()