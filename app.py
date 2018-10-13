import requests

from flask import Flask
from flask_cors import CORS
app = Flask(__name__)

# allow for all origins to account for chrome local html file origin being null
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/")
def hello():
    return "Hello World!"

# TODO: only update when needed
# TODO: URL from config?
@app.route("/api/update-values")
def update_values_file():
    f = open("./js/values.js", "w")
    f.write("let values = ")
    r = requests.get('https://example.com', verify=False)
    f.write(r.text)
    f.close()
    return "{result: \"success\"}"
