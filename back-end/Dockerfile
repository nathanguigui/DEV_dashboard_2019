# deploy apollo
FROM node:10.16.3-alpine
WORKDIR /back-end
ENV PATH /dashboard/node_modules/.bin:$PATH
COPY package.json /dashboard/package.json
RUN npm install prisma -g --silent
COPY . /back-end
RUN prisma generate
RUN npm install --silent
CMD ["./docker-run.sh"]
