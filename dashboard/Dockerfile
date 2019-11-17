# build environment
FROM node:12.2.0-alpine as build
WORKDIR /dashboard
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g
ENV PATH /dashboard/node_modules/.bin:$PATH
COPY package.json /dashboard/package.json
RUN npm install --silent
RUN npm install typescript react-scripts -g --silent
COPY . /dashboard
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /dashboard/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
