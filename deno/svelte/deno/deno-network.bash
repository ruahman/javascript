network=$1

if [[ "$(docker network inspect $network 2> /dev/null)" == "[]" ]]; then
  docker network create $network
else
  echo "network: $network is already setup"
fi