FROM node

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm

ENV HOME=/home/app

COPY package.json $HOME/davis/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/davis
RUN npm install

USER root
COPY . $HOME/davis
RUN chown -R app:app $HOME/*
USER app

CMD ["node", "index.js"]
