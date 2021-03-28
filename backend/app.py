from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) #create flask app
#changes made to this file will be auto updated to server after running it once
app.config['SECRET_KEY'] = 'mysecretkeygibberish'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'

#get instance of the database
db = SQLAlchemy(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True) #run the app -> python3 app.py in terminal
    # runs it on localhost:5000 on browser
