if [[ "$(docker images -q couchdb:latest 2> /dev/null)" == "" ]]; then
  docker pull couchdb
else
  echo "couchdb image already is setup"
fi