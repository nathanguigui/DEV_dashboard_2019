#!/bin/sh

prisma deploy
status=$?
while [ $status != 0 ]
do
  prisma deploy
  status=$?
  sleep 3
done
npm run start
exit 0
