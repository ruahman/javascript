#!/bin/bash

git clone --depth 1 https://github.com/sveltejs/template.git $1
chmod 777 -R $1

rm -rf $1/.git
rm $1/.gitignore