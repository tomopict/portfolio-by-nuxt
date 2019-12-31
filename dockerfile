FROM node:10

ENV PORT 8080
ENV HOST 0.0.0.0
ENV APP_ROOT /

COPY package*.json ./

WORKDIR ${APP_ROOT}

RUN npm install -g yarn && \
    # yarn global add @vue/cli
    yarn install --only=production

COPY . .

RUN npm rebuild node-sass &&\
    yarn build:prod
CMD yarn start:prod

# CMD ["/bin/bash"]