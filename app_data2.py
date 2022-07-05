# Dependencies
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

import pandas as pd
from flask import Flask, jsonify, render_template
import numpy as np
import csv
#######################################################################
## Database Setup
#######################################################################
#engine = create_engine("sqlite:///hospital.sqlite")

#reflect an existing database into a new model
#Base = automap_base()

# reflect the tables
#Base.prepare(engine, reflect=True)

#Save Reference to the table
#Hospital = Base.classes.hospital

##################################################################
# Flask Setup
##################################################################
app = Flask(__name__)
 
# convert hospital cvs file to html table
  
# reading the data in the csv file
df = pd.read_csv("hospital_data_cleanv.csv")
df.to_csv("hospital_data_cleanv.csv", index=None)
  
# route to html page - "table"
@app.route('/')
def csvtohtml():
    
    # converting csv to html
    data = pd.read_csv("hospital_data_cleanv.csv")
    return render_template("index_datatable1.html", tables=[data.to_html()], titles=[''])
  
if __name__ == "__main__":
    app.run(debug = True)




