#!/usr/bin/env python -tt

from flask import Flask, render_template, redirect, jsonify
from flask.ext.pymongo import PyMongo
from bson.json_util import dumps

app = Flask(__name__)
mongo = PyMongo(app)

def seed_db():
    SEED_DATA = \
    [
        {
        'event_name': 'The Blitz',
        'event_description': 'The Blitz refers to the strategic bombing campaign conducted by the Germans against London and other cities in England from September of 1940 through May of 1941, targeting populated areas, factories and dock yards. The first German attack on London actually occurred by accident.',
        'event_conclusion': "We hope that you learned something about The Blitz that you didn't know. Come back and see us again.",
        'event_type': 'Historical',
        'created_by': 'Vijay',
        'created_at': '11-12-2014 21:00:00',
        'updated_by': 'Vijay',
        'updated_at': '11-13-2014 09:00:00',
        'background_url': '/static/img/blitz.jpg',
        'marker':
            [
                {
                    'marker_name': 'First hit of the night to Royal Arsenal ',
                    'marker_type': 'Blue Pin',
                    'marker_order': 1,
                    'marker_description': 'The Royal Arsenal was caught up in the Blitz on 7 September 1940 and after several attacks the fuze factory was destroyed and the filling factory and a light gun factory badly damaged. Explosive filling work ceased on the site, but the production of guns, shells, cartridge cases and bombs continued.',
                    'latitude': '54.5608864',
                    'longitude': '-2.2125118',
                    'include_modern_map': 'True',
                    'people': [],
                    'date':
                        {
                            'date_type': 'datetime',
                            'start_date': '09-07-1940 14:55:00',
                            'end_date': ''
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
                },
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
                            'start_date': '09-07-1940 23:59:00',
                            'end_date': '09-07-1940 24:00:00'
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
                },
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
                           'start_date': '10-14-1940 20:00:00',
                           'end_date': ''
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
        },
        {
        'event_name': 'Alexander\'s Conquests',
        'event_description': 'The Blitz refers to the strategic bombing campaign conducted by the Germans against London and other cities in England from September of 1940 through May of 1941, targeting populated areas, factories and dock yards. The first German attack on London actually occurred by accident.',
        'event_conclusion': "We hope that you learned something about The Blitz that you didn't know. Come back and see us again.",
        'event_type': 'Historical',
        'created_by': 'Vijay',
        'created_at': '11-12-2014 21:00:00',
        'updated_by': 'Vijay',
        'updated_at': '11-13-2014 09:00:00',
        'background_url': '/static/img/alexander.jpg',
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
                            'start_date': '09-07-1940 14:55:00',
                            'end_date': ''
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
                },
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
                            'start_date': '09-07-1940 23:59:00',
                            'end_date': '09-07-1940 24:00:00'
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
                },
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
                           'start_date': '10-14-1940 20:00:00',
                           'end_date': ''
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
    ]
    mongo.db.app.insert(SEED_DATA)

@app.route('/')
@app.route('/index')
def index():
    mongo.db.app.drop()

    if 'events' not in mongo.db.collection_names():
        seed_db()

    return render_template('index.html'
                           , events = mongo.db.app.find())

# @app.route('/authenticate')
# def authenticate():
#     return redirect("https://accounts.google.com/o/oauth2/auth", code=302)

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

# Laura
@app.route('/map')
def map():
    return render_template('map.html')

# Audrey
@app.route('/js_testing')
def js_testing():
    return render_template('js_testing.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
