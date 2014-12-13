
if [ -d "./logs" ]; then
  echo "log directory found"
else
  echo "no log directory found; creating one for you"
  mkdir logs
fi

if [ -d "./db" ]; then
  echo "db directory found"
else
  echo "no db directory found; creating one for you"
  mkdir db
fi

echo "starting mongodb instance"
echo "ensure you use the shutoff script provided after you are finished"

mongod --dbpath ./db > logs/mongo.out &

python app.py > logs/server.out &
