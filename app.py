#!/usr/bin/env python -tt

from flask import Flask, abort, request, render_template, url_for
from pymongo import Connection
import urllib
import os
import urlparse

# MONGO_URL = os.environ.get('MONGOHQ_URL')
#
# if MONGO_URL:
#     # Get a connection
#     connection = Connection(MONGO_URL)
#     # Get the database
#     db = connection[urlparse(MONGO_URL).path[1:]]
# else:
#     # Not on an app with the MongoHQ add-on, do some localhost action
#     connection = Connection('localhost', 27017)

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
                        'marker_name': 'First hit of the night to Royal Arsenal ',
                        'marker_type': 'Blue Pin',
                        'marker_order': 1,
                        'marker_description': '(Owned by H.M War Department) E.50 A building of 2 floors about 300x200 used as workrooms, machine rooms office and store damaged by explosion',
                        'latitude': '54.5608864',
                        'longitude': '-2.2125118',
                        'include_modern_map': 'True',
                        'people': [],
                        'date':
                            {
                                'date_type': 'datetime',
                                'start': '09-07-1940 14:55:00',
                                'end': ''
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
        },
        {
        'event':
            {
            'event_name': 'Last bomb on the first night of the blitz',
            'event_type': 'Historical',
            'created_by': 'Audrey',
            'created_at': '11-10-2014 16:20:00',
            'updated_by': 'Vijay',
            'updated_at': '11-10-2014 17:00:00',
            'marker':
                [
                    {
                        'marker_name': 'Last bomb on the first night of the blitz',
                        'marker_type': 'Blue Pin',
                        'marker_order': 3,
                        'marker_description': '57 buildings damaged by explosion. 4 persons severely injured, extricated by the Brigade and removed to hospital.',
                        'latitude': '51.51396',
                        'longitude': '-0.003383',
                        'include_modern_map': 'True',
                        'people': [],
                        'date':
                            {
                                'date_type': 'datetime range',
                                'start': '09-07-1940 23:59:00',
                                'end': '09-07-1940 24:00:00'
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
        },
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
                       'marker_name': 'BBC Braodcasting House',
                       'marker_type': 'Blue Pin',
                       'marker_order': 2,
                       'marker_description': 'The BBC Broadcasting House was bombed during an evening broadcast. Radio announcer Bruce Belfrage, paused briefly as the bomb went off and then continued reading the evening news. This was one of several direct hits to the building during the Blitz.',
                       'latitude': '51.518571',
                       'longitude': '-0.143811',
                       'include_modern_map': 'True',
                       'people': ['Bruce Belfrage'],
                       'date':
                           {
                               'date_type': 'datetime',
                               'start': '10-14-1940 20:00:00',
                               'end': ''
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

# def seed_db(seed_data):
#     db = connection.get_default_database()
#     print db


app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/create')
def create():
    return render_template('create.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
