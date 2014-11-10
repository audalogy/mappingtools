#!/usr/bin/env python -tt

from flask import Flask, abort, request, render_template, url_for
from pymongo import Connection
import urllib
import os
import urlparse

MONGO_URL = os.environ.get('MONGOHQ_URL')

if MONGO_URL:
    # Get a connection
    connection = Connection(MONGO_URL)
    # Get the database
    db = connection[urlparse(MONGO_URL).path[1:]]
else:
    # Not on an app with the MongoHQ add-on, do some localhost action
    connection = Connection('localhost', 27017)

SEED_DATA = \
    [
        {
        'event':
            {
            'event_name': 'The Blitz',
            'event_type': 'Historical',
            'created_by': 'Vijay',
            'created_at': '11-12-2014 21:00:00',
            'updated_by': 'Vijay',
            'updated_at': '11-13-2014 09:00:00',
            'marker':
                [
                    {
                        'marker_name': 'Royal Arsenal',
                        'marker_type': 'Blue Pin',
                        'marker_order': 1,
                        'marker_description': 'This is where it all started.',
                        'latitude': '',
                        'longitude': '',
                        'include_modern_map': 'True',
                        'people': [],
                        'date':
                            {
                                'date_type': 'datetime range',
                                'start': '12-23-1941 22:02:29',
                                'end': '12-23-1941 23:12:19'
                            },
                        'image':
                            {
                                'file_name': '',
                                'caption': ''
                            },
                        'audio':
                            {
                                'file_name': '',
                                'caption': ''
                            }
                    }
                ]
            }
        }
    ]

def seed_db(seed_data):
    db = connection.get_default_database()
    print db


app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/create')
def create():
    return render_template('create.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
