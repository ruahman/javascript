SHELL=/bin/bash

name = nodejs
image = $(name)
port = 3000:3000
path=$(shell pwd)
network=$(name)-net
dockerFile=$(path)/Dockerfile

.PHONY: build
build:
	@if [[ "$(shell docker images -q $(image) 2> /dev/null)" == "" ]]; then \
		docker build -f $(dockerFile) -t $(image) $(path); \
	else \
		echo "image: $(image) is already setup"; \
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
	docker container run --name $(name) --network=$(network) -v $(path):/app/ -p $(port) -it --rm $(image) /bin/bash

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
