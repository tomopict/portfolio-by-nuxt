FROM node:10

ENV PORT 8080
ENV HOST 0.0.0.0
ENV APP_ROOT /usr/src/app
ENV TZ 'Asia/Tokyo'

COPY package*.json ./

WORKDIR ${APP_ROOT}

RUN npm install --no-bin-links -g yarn && \
    # yarn global add @vue/cli
    yarn install --only=production

COPY . .

RUN npm rebuild node-sass &&\
    yarn build:prod
CMD yarn start:prod

# CMD ["/bin/bash"]