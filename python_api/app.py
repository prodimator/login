from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
import bcrypt


app = Flask(__name__)
api = Api(app)
CORS(app)

password = b"kinsapassword"
hashed = bcrypt.hashpw(password, bcrypt.gensalt())

users = [
    {
        "username": "kinsauser",
        "password": hashed
    }
]

class User(Resource):\

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("username")
        parser.add_argument("password")
        args = parser.parse_args()
        for user in users:
            if(args["username"] == user["username"]):
                verifyPassword = bytes(args["password"], encoding="ascii")
                if (bcrypt.checkpw(verifyPassword, user["password"])):
                    return 200
        return "Incorrect credentials!", 401

api.add_resource(User, "/login")

app.run(debug=True, host="0.0.0.0")