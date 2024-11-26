default: nix

nix:
	nix develop

zshrc\:clean:
	rm .zshrc

node\:clean:
	rm -rf .node_modules

clean: zshrc\:clean node\:clean 

.PHONY: nix
.PHONY: clean zshrc\:clean node\:clean 

