import datetime
from pymongo import MongoClient

client = MongoClient('mongodb://mapster:iolab2014@ds061200.mongolab.com:61200/heroku_app31316186')
mongo = client.get_default_database()

def seed_db():
    mongo.db.app.drop()
    mongo.app.insert(seed())

def seed():
    SEED_DATA = \
    [
        {
        'event_name': 'Alexander\'s Conquests',
        'event_description': 'Explore Alexander of Macedon\'s conquests through the Middle East and Asia.',
        'event_conclusion': "Come back and see us again.",
        'event_type': 'Historical',
        'created_by': 'Laura',
        'created_at': datetime.datetime.utcnow(),
        'updated_by': 'Laura',
        'updated_at': datetime.datetime.utcnow(),
        'background_url': '/static/img/alexander.jpg',
        'event_images':
            [
                {
                    'order':1,
                    'file_path':'/static/event_images/alexander.jpg',
                },
            ],
        'marker':
            [
                {
                    'marker_name': 'Alexander comes to power',
                    'marker_type': 'Blue Pin',
                    'marker_order': 1,
                    'marker_description': "Alexander's father, Philip II, is assasinated and after a brief question of succession, Alexander takes control of Macedon at age 20. He executes family members he thinks may pose threats to his rule.",
                    'latitude': '40.761483',
                    'longitude': '22.525763',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                            {
                                'order':1,
                                'file_path':'/static/event_images/alexandermap.svg',
                            }
                        ],
                    'date':
                        {
                            'date_type': 'date',
                            'start_date': '336 BCE',
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
                    'marker_name': 'Battle of Issus',
                    'marker_type': 'Blue Pin',
                    'marker_order': 2,
                    'marker_description': 'Alexander takes control of Syria and the Levant in a great victory over King Darius III of Persia.',
                    'latitude': '36.621514',
                    'longitude': '36.265418',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                            {
                                'order':1,
                                'file_path':'/static/event_images/Battle_issus_decisive.png',
                            }
                        ],
                    'date':
                        {
                            'date_type': 'date',
                            'start_date': '332 BCE',
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
                    'marker_name': 'Alexander captures Gaza and Egypt. ',
                    'marker_type': 'Blue Pin',
                    'marker_order': 3,
                    'marker_description': 'Alexander captures Gaza after a long seige and advances through the rest of Egypt easily. Founds Alexandria-by-Egypt. People regard him as a liberator and call him "the new master of the universe."',
                    'latitude': '31.504504',
                    'longitude': '34.465431',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                        ],
                    'date':
                        {
                            'date_type': 'date',
                            'start_date': '332 BCE',
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
                    'marker_name': 'Battle of Gaugamela',
                    'marker_type': 'Blue Pin',
                    'marker_order': 4,
                    'marker_description': "At the head of his army, Alexander marches from Egypt to Meopotamia where they fight the final big battle with Persian King Darius III. Alexander's victory marks the fall of the Persian Achaemenid Empire.",
                    'latitude': '36.346574',
                    'longitude': '43.127008',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                        ],
                    'date':
                        {
                            'date_type': 'date',
                            'start_date': '331 BCE',
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
                    'marker_name': 'Turns back to Persia from Northern India. ',
                    'marker_type': 'Blue Pin',
                    'marker_order': 5,
                    'marker_description': "Tired after nearly a decade or war, Alexander's, troops mutiny at Hyphasis River in India. Alexander agrees not to press on further and turns for home.",
                    'latitude': '31.565086',
                    'longitude': '74.977058',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                            {
                                'order':1,
                                'file_path':'/static/event_images/MacedonEmpire.jpg',
                            }
                        ],
                    'date':
                        {
                            'date_type': 'date',
                            'start_date': '324 BCE',
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
                    'marker_name': 'Alexander dies',
                    'marker_type': 'Blue Pin',
                    'marker_order': 6,
                    'marker_description': "After almost two weeks of various symptoms Alexander dies without a clear heir. His child with wife Roxana isn't yet born. The empire he built begins to fall apart.",
                    'latitude': '32.482245',
                    'longitude': '44.432813',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                            {
                                'order':1,
                                'file_path':'/static/event_images/alexanderdeath.gif',
                            }
                        ],
                    'date':
                        {
                            'date_type': 'datetime range',
                            'start_date': '323 BCE',
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
            ]
        },
        {
        'event_name': 'The Blitz',
        'event_description': 'The Blitz refers to the strategic bombing campaign conducted by the Germans against London and other cities in England from September of 1940 through May of 1941, targeting populated areas, factories and dock yards.',
        'event_conclusion': "We hope that you learned something about The Blitz that you didn't know. Come back and see us again.",
        'event_type': 'Historical',
        'created_by': 'Vijay',
        'created_at': datetime.datetime.utcnow(),
        'updated_by': 'Vijay',
        'updated_at': datetime.datetime.utcnow(),
        'background_url': '/static/img/blitz.jpg',
        'event_images':
            [
                {
                    'order':1,
                    'file_path':'/static/event_images/WWII_London_Blitz_East_London.jpg',
                },
                {
                    'order':2,
                    'file_path':'/static/event_images/WWII_bombers.jpg',
                }
            ],
        'marker':
            [
                {
                    'marker_name': 'First bomb of the first night of the blitz',
                    'marker_type': 'Blue Pin',
                    'marker_order': 1,
                    'marker_description': 'Grocers: 3x2 roof damaged.',
                    'latitude': '51.4934804',
                    'longitude': '-0.0576837',
                    'include_modern_map': 'True',
                    'timer_duration': 5,
                    'people': [],
                    'marker_images':
                        [
                        ],
                    'date':
                        {
                            'date_type': 'datetime',
                            'start_date': '09-07-1940 0:08',
                            'end_date': ''
                        },
                    'audio':
                        {
                            'file_name': '',
                            'caption': ''
                        }
                },
                {
                    'marker_name': 'First hit of the night to Royal Arsenal ',
                    'marker_type': 'Blue Pin',
                    'marker_order': 2,
                    'marker_description': 'The Royal Arsenal was caught up in the Blitz on 7 September 1940 and after several attacks the fuze factory was destroyed and the filling factory and a light gun factory badly damaged. Explosive filling work ceased on the site, but the production of guns, shells, cartridge cases and bombs continued.',
                    'latitude': '54.5608864',
                    'longitude': '-2.2125118',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [
                            {
                                'order':1,
                                'file_path':'/static/event_images/royal_arsenal1.jpg',
                            },
                            {
                                'order':2,
                                'file_path':'/static/event_images/royal_arsenal2.jpg',
                            }
                        ],
                    'date':
                        {
                            'date_type': 'datetime',
                            'start_date': '09-07-1940 14:55:00',
                            'end_date': ''
                        },
                    'audio':
                        {
                            'file_name': '',
                            'caption': ''
                        }
                },
                {
                    'marker_name': 'First bomb dropped on the royal docks in the harbor during the blitz',
                    'marker_type': 'Blue Pin',
                    'marker_order': 3,
                    'marker_description': 'HM War Dept. Block 47- A building og three floors about 250 x 80 used as store and contents damaged.',
                    'latitude': '51.51396',
                    'longitude': '-0.003383',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'marker_images':
                        [

                        ],
                    'date':
                        {
                            'date_type': 'datetime',
                            'start_date': '09-07-1940 14:55:00',
                            'end_date': ''
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
                    'marker_order': 4,
                    'marker_description': '57 buildings damaged by explosion. 4 persons severely injured, extricated by the Brigade and removed to hospital.',
                    'latitude': '51.51396',
                    'longitude': '-0.003383',
                    'include_modern_map': 'True',
                    'timer_duration': 8,
                    'people': [],
                    'date':
                        {
                            'date_type': 'datetime range',
                            'start_date': '09-07-1940 23:59:00',
                            'end_date': '09-07-1940 24:00:00'
                        },
                    'audio':
                        {
                            'file_name': '',
                            'caption': ''
                        }
                },
                {
                   'marker_name': 'BBC Broadcasting House',
                   'marker_type': 'Blue Pin',
                   'marker_order': 4,
                   'marker_description': 'The BBC Broadcasting House was bombed during an evening broadcast. Radio announcer Bruce Belfrage, paused briefly as the bomb went off and then continued reading the evening news. This was one of several direct hits to the building during the Blitz.',
                   'latitude': '51.518571',
                   'longitude': '-0.143811',
                   'include_modern_map': 'True',
                    'timer_duration': 8,
                   'people': ['Bruce Belfrage'],
                    'marker_images':
                        [

                        ],
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
    return SEED_DATA

if __name__ == "__main__":
    seed_db()