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

                echo " %F{yellow}\$changes\$added\$deleted\$(echo \$untracked)%F{red}git(\$branch%F{yellow}\$ahead%F{red})"
              } 

              # Define a function to generate the prompt
              function update_prompt {
                  local timestamp=\$(date +"%H:%M:%S") # Current time
                  local random_number=\$((RANDOM % 1000)) # Random number
                  # PROMPT="%F{cyan}[\$timestamp] %F{yellow}Random:\$random_number %F{blue}%~ %F{green}%# %F{reset}"
                  PROMPT="%F{green}󰛦 (%n):%F{blue}%c:%F{cyan}\$timestamp\$(git_status)%F{white}$ "
                  export PS1=\$PROMPT
              }

              precmd_functions+=(update_prompt)
            EOF
            fi

            export SHELL=$(which zsh)
            export ZDOTDIR=$PWD
            exec zsh
          '';
        };
      }
    );
}
