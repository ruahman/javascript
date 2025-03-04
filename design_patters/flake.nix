{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in
  {

    # packages.x86_64-linux.default = self.packages.x86_64-linux.hello;

    devShells.${system}.default = with pkgs; mkShell {
      buildInputs = [
        typescript-language-server
        bun
        zsh
      ];
    };

  };
}
