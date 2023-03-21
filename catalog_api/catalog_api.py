from flask import Flask, jsonify,request
from flask_cors import CORS
import json
import mysql.connector

server = Flask(__name__)
CORS(server)

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

@server.route('/cart',methods=['GET'])
def cart():

    args = request.args
    if "user_id" not  in args:
        return "Bad Request", 400
    
    query = """	SELECT p.name, p.description,p.category,p.price, p.image_url, c.quantity 
	FROM cart c JOIN users u ON c.user_id = u.id JOIN products p ON p.id = c.product_id
	WHERE u.id = {id};""".format(id=args['user_id'])
    
    db = connectDb()
    cursor = db.cursor()

    cursor.execute(query)
    row_headers=[x[0] for x in cursor.description] #this will extract row headers
    rv = cursor.fetchall()

    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    cursor.close()
    db.close()
    return json.dumps(json_data)

#@server.route('/cart',methods=['POST'])
#def cart():
#
#    args = request.args
#    if "email" not  in args:
#        return "Bad Request", 400
#
#    if "product_id" not  in args:
#        return "Bad Request", 400
#    
#    if "quantity" not  in args:
#        return "Bad Request", 400
#    
#    query = """	SELECT oi.id p.name, p.description,p.category,p.price,p.image_url, oi.quantity 
#	FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN products p ON p.id = oi.product_id
#	WHERE o.customer_email = '{email}' and o.status = 'pending';""".format(email=args['email'])
#    
#    db = connectDb()
#    cursor = db.cursor()
#
#    cursor.execute(query)
#    row_headers=[x[0] for x in cursor.description] #this will extract row headers
#    rv = cursor.fetchall()
#
#    json_data=[]
#    for result in rv:
#        json_data.append(dict(zip(row_headers,result)))
#
#    cursor.close()
#    db.close()
#    return json.dumps(json_data)

if __name__ == '__main__':
    server.run()