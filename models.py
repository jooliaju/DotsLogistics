from app import db

class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True) #company ID on the site
    name = db.Column(db.String(50), nullable=False) #company name

    #TODO: decide which data to take from businesses