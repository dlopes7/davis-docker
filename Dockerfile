FROM node:argon

RUN mkdir -p /usr/src/davis
WORKDIR /usr/src/davis


# Install app dependencies
RUN npm init
RUN npm install

# Bundle app source
COPY . /usr/src/davis

EXPOSE 8080

