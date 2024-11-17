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
            bun
            zsh
          ];
         
          shellHook = ''

            ### zsh
            cat << EOF > .zshrc
            git_status() {
              branch=\$(git branch --show-current)

              # check if any files were modified
              if [[ -n \$(git status --porcelain | grep '^ \?M') ]]; then
                changes="*"
              else
                changes=""
              fi

              # Check if any files were added
              if [[ -n \$(git status --porcelain | grep '^ \?A') ]]; then
                added="+"
              else
                added=""
              fi

              if [[ -n \$(git status --porcelain | grep '^ \?D') ]]; then
                deleted="-"
              else
                deleted=""
              fi

              if [[ -n \$(git status --porcelain | grep '^ \??') ]]; then
                untracked="?"
              else
                untracked=""
              fi

              if git status | grep -q "Your branch is ahead"; then
                ahead="" 
              else
                ahead=""
              fi

              echo "%F{yellow}\$changes\$added\$deleted\$untracked %F{red}git(\$branch\$ahead)"
            } 

            export PS1="%F{green}󰛦 (TypeScript):%F{blue}%c \$(git_status)%F{white}$ "

            EOF

            export SHELL=$(which zsh)
            export ZDOTDIR=$PWD
            exec zsh
          '';
        };
      }
    );
}
