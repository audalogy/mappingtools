Mapster
============
#### Getting Setup

1. `git clone git@github.com:vijayv/mappingtools.git`
2. Highly recommend using [virtualenv](http://virtualenv.readthedocs.org/en/latest/)
3. If using virtualenv, [activate it](http://virtualenv.readthedocs.org/en/latest/virtualenv.html#activate-script)
4. Install from requirements file: `pip install -r requirements.txt`
5. Start flask server: `python app.py`
6. Navigate to http://127.0.0.1:5000

#####* The application still requires internet access to be able to plot the maps and to speak to the database.
----
#### Running the database locally
1. cd to app directory
2. mkdir ./db
3. Start mongodb: `mongod --dbpath ./db`
4. Change URL string to use localhost in app.py and data.py
5. seed data: python data.py
6. run: python app.py
