from app import app, db
from flask import render_template, redirect, url_for, flash, get_flashed_messages
from datetime import datetime

import forms

#declare different routes
@app.route('/') #if base route, then run
@app.route('/home') #localhost:5000/index will also show this
def home():
    return

@app.route('/about')
def about():
    return

@app.route('/dashboard')
def dashboard():
    return