#!/usr/bin/env python -tt

from flask import Flask, render_template, redirect, request, url_for
from flask.ext.pymongo import PyMongo
from bson.json_util import dumps
import os
from data import seed

app = Flask(__name__)
mongo = PyMongo(app)

UPLOAD_FOLDER = './static/event_images/'
ALLOWED_EXTENSIONS = set(['png', 'jpeg', 'jpg'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def seed_db():
    mongo.db.app.insert(seed())

@app.route('/')
@app.route('/index')
def index():
    mongo.db.app.drop()

    if 'events' not in mongo.db.collection_names():
        seed_db()

    return render_template('index.html'
                           , events = mongo.db.app.find())


@app.route('/present/<ObjectId:event_id>')
def present(event_id):
    event = mongo.db.app.find_one_or_404(event_id)
    return render_template('present.html'
                           , event = event)

@app.route('/data/<ObjectId:event_id>')
def data(event_id):
    event = mongo.db.app.find_one_or_404(event_id)
    return dumps(event)

@app.route('/create')
def create():
    return render_template('create.html')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route("/upload", methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            # filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
            return redirect(url_for('upload'))
    return """
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form action="" method=post enctype=multipart/form-data>
      <p><input type=file name=file>
         <input type=submit value=Upload>
    </form>
    <p>%s</p>
    """ % "<br>".join(os.listdir(app.config['UPLOAD_FOLDER'],))

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
