
from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func



class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data=db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'))


class User(db.Model,UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(300), unique=True)
    name= db.Column(db.String(200))
    tel= db.Column(db.Integer, unique=True)
    day= db.Column(db.Integer)
    notes = db.relationship('Note')

    def __init__(self, email, name):
        self.email = email
        self.name = name
        



