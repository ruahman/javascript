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
            typescript-language-server
            vscode-js-debug
            biome
            nodejs
          ];
        
          shell = pkgs.bashInteractive;
          shellHook = ''
            rm .vscode-js-debug
            ln -sf ${vscode-js-debug} .vscode-js-debug
          '';
        };
      }
    );
}
