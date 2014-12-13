ps -ef | grep "mongo" | awk '{print $2}' | xargs kill -9
ps -ef | grep "python app.py" | awk '{print $2}' | xargs kill -9
