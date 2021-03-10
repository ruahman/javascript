SHELL=/bin/bash

name = deno
ports = 8000:8000

ifndef network
	network=deno-net
endif

.PHONY: build
build:
	./deno-build.bash $(name)

.PHONY: network
network:
	./deno-network.bash $(network)

.PHONY: run
run: build
	@echo run

.PHONY: shell
shell: build network
	docker container run --name $(name) --network=$(network) -v $(shell pwd):/app/ -w /app -p $(ports) -it --rm $(name) /bin/bash

.PHONY: stop
stop:
	@echo stop

.PHONY: start
start:
	@echo start

.PHONY: rm
rm:
	@echo rm

.PHONY: rmi
rmi:
	docker rmi $(name)