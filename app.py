#!/usr/bin/env python -tt

from flask import Flask, abort, request, render_template, url_for
app = Flask(__name__)
import urllib


@app.route('/')
def homepage():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
