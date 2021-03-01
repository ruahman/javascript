SHELL=/bin/bash

name=couchdb
network=couchdb-net
volume=couchdbVolume

.PHONY: docker-build
docker-build:
	./shell_scripts/couchdb-image.bash

.PHONY: docker-run
docker-run: docker-build docker-network
	docker run --name $(name) --network=$(network) -v $(volume):/opt/couchdb/etc/local.d -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=password -p 5984:5984 -d couchdb

.PHONY: docker-stop
docker-stop: 
	docker stop $(name)

.PHONY: docker-start
docker-start:
	docker start $(name)

.PHONY: docker-rm
docker-rm:
	docker rm $(name)

.PHONY: docker-rmi
docker-rmi:
	docker rmi $(name)

.PHONY: docker-network
docker-network:
	./shell_scripts/docker-network.bash $(network)

.PHONY: docker-network-rm
docker-network-rm:
	docker network rm $(network)

.PHONY: docker-volume-rm
docker-volume-rm:
	docker volume rm $(volume)

# run this with -k
clear: docker-rm docker-rmi docker-network-rm docker-volume-rm