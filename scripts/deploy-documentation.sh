#!/bin/bash

echo Documentation Generation

gulp quality > result.txt

if ! git diff-index --quiet HEAD --; then
    echo CHANGED
fi

exit