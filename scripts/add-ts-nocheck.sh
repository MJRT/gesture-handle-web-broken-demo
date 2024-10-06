#!/bin/bash

DIR=$(realpath "${1:-./src/generated}")

echo "Target directory: $DIR"

if [ ! -d "$DIR" ]; then
  echo "Directory does not exist: $DIR"
  exit 1
fi

echo "Start adding ts-nocheck:"

find "$DIR" -name "*.ts" -o -name "*.js" | while IFS= read -r file; do
  if ! grep -q "@ts-nocheck" "$file"; then
    echo "Processing file: $file"
    printf "// @ts-nocheck\n%s\n" "$(cat "$file")" > "$file"
  fi
done
