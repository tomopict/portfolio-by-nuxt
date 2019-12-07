FROM node:12.11.0

ENV HOST 0.0.0.0
ENV APP_ROOT /app

WORKDIR ${APP_ROOT}

RUN npm install -g yarn && \
    yarn global add @vue/cli

CMD ["/bin/bash"]