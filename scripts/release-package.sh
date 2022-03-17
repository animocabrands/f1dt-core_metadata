#!/bin/bash

npmrc=""

if [ $1 = "public" ]; then
    npmrc=".npmrc_public"
elif [ $1 = "private" ]; then
    npmrc=".npmrc_private"
fi

if [ $npmrc = "" ]; then
    echo "usage: release-package <private|public>"
    exit 1
fi

if [ -f $npmrc ]; then
    ln -s $npmrc .npmrc
fi

npm publish --scope public

rm -rf .npmrc
