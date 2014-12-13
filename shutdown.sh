
ps -ef | grep "mongo" | awk '{print $2}' | xargs kill -9
