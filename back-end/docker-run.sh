#!/bin/sh

rm -rf node_modules/
prisma generate
prisma reset -f
prisma deploy
while [ $? != 0 ]
do
  sleep 3
  prisma deploy
done
npm i
npm run start
exit 0
