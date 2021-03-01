include couchdb/Makefile

network=ddnc-net

.PHONY: couchdb
couchdb:
ifeq ($(cmd), run)
	cd couchdb && $(MAKE) docker-run network=$(network)
else ifeq ($(cmd), stop)
	cd couchdb && $(MAKE) docker-stop
else ifeq ($(cmd), start)
	cd couchdb && $(MAKE) docker-start
else ifeq ($(cmd), rm)
	cd couchdb && $(MAKE) docker-rm
endif

.PHONY: deno
deno:
ifeq ($(cmd), shell)
	cd deno && $(MAKE) shell network=$(network)
endif