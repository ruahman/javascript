DIR := ${CURDIR}

CONTAINER := deno-ruahman

IMAGE := deno:ruahman

run:
	deno task run

test:
	deno test $(path)

check:
	deno check main.ts

docker:
ifdef build
	docker build -t deno:ruahman .
else ifdef run
	docker run -it -v $(DIR):/code --name $(CONTAINER) $(IMAGE) bash
else ifdef start
	docker start -ai $(CONTAINER)
else ifdef rm
	docker container rm $(CONTAINER)
else ifdef rmi
	docker image rm $(IMAGE)
else
	@echo please specify run, start, build, rm, or rmi
endif