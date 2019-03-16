from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
import bcrypt
import users as Users

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route('/login', methods=['POST']) 
def login():
    if request.method == 'POST':
        parser = reqparse.RequestParser()
        parser.add_argument("username")
        parser.add_argument("password")
        args = parser.parse_args()
        for user in Users.users:
            if(args["username"] == user["username"]):
                verifyPassword = bytes(args["password"], encoding="ascii")
                if (bcrypt.checkpw(verifyPassword, user["password"])):
                    return "Success", 200
        return "Incorrect credentials!", 401

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")