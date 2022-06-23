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
Passenger = Base.classes.passenger

##################################################################
# Flask Setup
##################################################################
app = Flask(__name__)

