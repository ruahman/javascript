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
            bun
            zsh
          ];
         
          shellHook = ''

            ### zsh
            if [ ! -f ".zshrc" ]; then
              cat << EOF > .zshrc
              git_status() {
    
                # Check if inside a Git repository
                if ! git rev-parse --is-inside-work-tree &> /dev/null; then
                    return 1  # Exit the function early with a non-zero exit code
                fi

                # get current branch
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

                # check if any files were deleted
                if [[ -n \$(git status --porcelain | grep '^ \?D') ]]; then
                  deleted="-"
                else
                  deleted=""
                fi

                # check if there are any untracked files
                if [[ -n \$(git status --porcelain | grep '^ \??') ]]; then
                  untracked="?"
                else
                  untracked=""
                fi

                # check if your branch is ahead
                if git status | grep -q "Your branch is ahead"; then
                  ahead="" 
                else
                  ahead=""
                fi

                echo " %F{yellow}\$changes\$added\$deleted\$(echo \$untracked)%F{red}git(\$branch%F{yellow}\$ahead%F{red})"
              } 
  
              export start_path=\$PWD
              relative_path() {
                if [[ -z \$1 ]]; then
                    return 1
                fi

                # Get the relative path using realpath
                if relative=\$(realpath --relative-to="\$(echo \$start_path)" "\$1" 2>/dev/null); then
                    if [[ "\$relative" == "." ]]; then
                        echo "~"
                    else
                        echo "~/\$relative"
                    fi
                else
                    return 1
                fi
              }

              # Define a function to generate the prompt
              function update_prompt {
                  PROMPT="%F{green}󱄅 (%n@%M):%F{blue}\$(relative_path \$PWD)\$(git_status)%F{white}$ "
                  export PS1=\$PROMPT
              }

              precmd_functions+=(update_prompt)
            EOF
            fi

            if [ -t 1 ]; then
              export SHELL=$(which zsh)
              export ZDOTDIR=$PWD
              exec zsh
            fi
          '';
        };
      }
    );
}
