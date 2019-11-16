# deploy apollo
FROM node:10.16.3-alpine
WORKDIR /back-end
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g
ENV PATH /dashboard/node_modules/.bin:$PATH
COPY package.json /dashboard/package.json
RUN npm install prisma -g --silent
COPY . /back-end
RUN prisma generate
RUN npm install --silent
CMD ["./docker-run.sh"]
