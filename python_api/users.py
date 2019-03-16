import bcrypt

#pseudo database file
users = [
    {
        "username": "kinsauser",
        "password": bcrypt.hashpw(b"kinsapassword", bcrypt.gensalt())
    }
]