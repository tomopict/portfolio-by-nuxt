# portfolio
Nuxt.js Base portfolio site 

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:4000 and fetch localserver

## start before below commond mockAPI server start at localhost:4001
$(npm bin)/json-server --watch db.json --routes routes.json -p 4001
$ yarn serve:dev

# serve with hot reload at localhost:4000 and fetch remoteserver
$ yarn serve:prod

# build for production and launch server
$ yarn build:prod
$ yarn start:prod

# generate static project
$ yarn generate:prod


```

## docker imageをpushする

https://cloud.google.com/container-registry/docs/pushing-and-pulling?hl=ja

# make image + add tag
docker build ./ -t [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG]

## タグ付きイメージを Container Registry に push する
gcloud docker -- push [IMAGE]

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).