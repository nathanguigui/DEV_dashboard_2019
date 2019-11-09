#!/usr/bin/env bash

git pull
npm run build
sudo cp -R build/* /var/www/html
