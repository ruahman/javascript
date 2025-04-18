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
            bashInteractive
            bash-completion
            nodejs
            typescript-language-server
            vscode-js-debug
            biome
          ];
        
          shell = pkgs.bashInteractive;
          shellHook = ''
            ln -sf ${vscode-js-debug} .vscode-js-debug
            echo "Hello Javascript  "
          '';
        };
      }
    );
}
