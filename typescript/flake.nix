{
  description = "Territory Assitant dev environment";

  inputs = {
    nixpkgs.url      = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url  = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
      in
      {
        devShells.default = with pkgs; mkShell {
          buildInputs = [
            typescript-language-server
            vscode-js-debug
            bun
          ];
         
          shellHook = ''
            if [ ! -L .vscode-js-debug ]; then
              ln -sf ${vscode-js-debug} .vscode-js-debug
            fi
          '';
        };
      }
    );
}
