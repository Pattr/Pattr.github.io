#!/bin/bash

echo Documentation Generation

#generate the documentation

if [ -n "$(git ls-files --others --exclude-standard)" ]; then
    #push the documentation into Github
fi

exit