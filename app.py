# Dependencies
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
import json
import numpy as np

#######################################################################
## Database Setup
#######################################################################
engine = create_engine("sqlite:///hospital.sqlite")

#reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

#Save Reference to the table
Hospital = Base.classes.hospital

##################################################################
# Flask Setup
##################################################################
app = Flask(__name__)


@app.route("/")
#define what to do when user hits the index route
def welcome():
    return render_template('index.html')


@app.route("/api/v1.0/name")
def name():
    #create our session (link) from Python to the DB
    session = Session(engine)

    #query all hospital names
    results = session.query(Hospital.name).all()

    session.close()

    #convert list of tuples into normal list
    hospital_names = list(np.ravel(results))

    return jsonify(hospital_names) 


@app.route("/api/v1.0/city")
def city():
    #create our session (link) from Python to the DB
    session = Session(engine)

    #query all cities
    results = session.query(Hospital.city).all()

    session.close()

    #convert list of tuples into a normal list
    city = list(np.ravel(results))

    return jsonify(city) 


@app.route("/api/v1.0/rating")
def rating ():
    #create our session (link) from Python to the DB
    session = Session(engine)

    all_names = list(np.ravel(results))

    return jsonify(all_names) 

if __name__ == '__main__':
    app.run(debug = True)      




