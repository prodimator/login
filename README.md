# Kinsa Login app

## Building and running the program

You can either run the app using the Docker setup or without it.

#### With the Docker setup

The Python back-end runs in a separate docker container from the React front-end, also in its own container. There is a Dockerfile in each of the directories.

Follow these steps to build the image and run the container for the back-end container:

`cd python_api`
`docker build -t python-api:latest .`
`docker run -d --name python-api -p 5000:5000 python-api:latest`

Next, build the image and run the front-end container:

`cd login-page`
`docker build -t login-app:latest .`
`docker run -d --name login-app -p 3000:3000 login-app:latest`

Go to http://localhost:3000 to check out the app!

#### Without using Docker

Make sure to use python 3 when running the program.
Follow these steps to start the python flask server:

`cd python_api`
`pip3 install -r requirements.txt`
`python3 app.py`

To build and run the front-end:

`cd login-app`
`npm install`
`npm start`

Go to http://localhost:3000 to check out the app!

## Assumptions

1. Development was done on MacOS
2. Use Python 3 for the back-end
3. After user successfully logs in, the app redirects to another page that says "Congrats you logged in!"
4. If user is unsuccessful in logging in, an error message appears
5. Major assumption about storing usernames and passwords:

    I created a separate file `users.py` that acts as a pseudo database. This file contains a user's username and (salted and hashed) password. Ideally, any sort of secrets file should be placed in the .gitignore and managed by the individual developer locally or by a sysadmin on a production server. I created `users.py` and implemented it in that way to avoid any config setup on your end. This implementation is designed to support multiple users.

## Test Cases

1. User logs in with correct credentials and is successfully redirected to /app (yay!)
2. User enters an incorrect username and incorrect password and an error message is displayed: "Your credentials are incorrect!"
3. User leaves the username and/or password field blank and gets an error message: "Your credentials are incorrect!"

## Wishlist

1. Add helpful error handling to display which field is empty or incorrect. (i.e. if you input a username but no password, a hint will display: 'Please enter a password').
2. After a user logs in, save their session with a token and route via this token. 
3. Allow a certain number of login attempts before a user is locked out and has to reset their username and/or password.
4. Add functionality to reset username and/or password. 
5. Add functionality to the front-end to add multiple users. Back-end structure already supports multiple users.
6. Adding a Docker Compose file.