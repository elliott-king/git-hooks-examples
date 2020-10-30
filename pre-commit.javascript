#!/bin/sh

# Warn about console logs & debugging

git diff --cached --name-only | while read FILE; do

  RESULT=$(grep -i "console.log(" "$FILE")
  if [[ ! -z $RESULT ]]; then
    printf "\e[1;33m\tWarning, the commit contains a console log.\e[0m\n" >&2
  fi

done