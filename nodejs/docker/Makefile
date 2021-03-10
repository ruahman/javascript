SHELL=/bin/bash

name = nodejs
ports = 5000:5000

ifndef network
	network=$(name)-net
endif

.PHONY: build
build:
	@if [[ "$(shell docker images -q $(name) 2> /dev/null)" == "" ]]; then \
		docker build -t $(name) .; \
	else \
		echo "image: $(name) is already setup"; \
	fi

.PHONY: network
network:
	@if [[ "$(shell docker network inspect $(network) 2> /dev/null)" == "[]" ]]; then \
		docker network create $(network); \
	else \
		echo "network: $(network) is already setup"; \
	fi

.PHONY: run
run: build network 
	@echo build

.PHONY: shell
shell: build network 
	docker container run --name $(name) --network=$(network) -v $(shell pwd):/app/ -w /app -p $(ports) -it --rm $(name) /bin/bash

.PHONY: stop
stop:
	docker container stop $(name)

.PHONY: start
start:
	docker container start $(name)

.PHONY: rm
rm:
	docker container rm $(name)

.PHONY: rmi
rmi:
	docker rmi $(name)

.PHONY: rmv
rmv:
	docker volume rm $(volume)

