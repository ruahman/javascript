name=$1

if [[ "$(docker images -q $name 2> /dev/null)" == "" ]]; then
  docker build -t $name .
else
  echo "deno image already is setup"
fi