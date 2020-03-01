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

## make image + add tag
docker build ./ -t [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG]

## タグ付きイメージを Container Registry に push する
gcloud docker -- push [IMAGE]

## ディレクトリ構造

```
├─ README.md
├── assets // 外部に露出する前提のassets
│   ├── README.md // 各々のディレクトリ個別のReadMe
│   ├── css
│   ├── img
│   └── scss
├── cloud-build.yaml // cloud-build用の設定ふぁいる
├── components, 
│   ├── Atmos // Base〜で始まるもの、HTMLのWraapper的な扱い,Props → OK, Slot → NG, Store → NG, API通信→NG, Domain → NG
│   ├── Molecules // 汎用性の高いもの Props → OK, Slot → OK, Storr → NG, API通信→NG, Domain → NG
│   ├── Organisms // Moleculesの塊 Props → OK, Slot → OK, Storr → OK, API通信→NG, Domain → OK
│   └── README.md
├── composables
│   └── use-promise.ts // API経由でデータを取得してくるときのWrapper
├── constants // 定数
│   └── authordata.js
├── db.json // localserverを建てた場合のDBのmockデータ
├── dist // buildされたデータ
├── docker-compose.yml
├── dockerfile
├── env.development.js
├── env.production.js
├── jest.config.js
├── layouts
│   ├── README.md
│   └── default.vue
├── middleware
│   └── README.md
├── models //型定義
│   └── QiitaPost.ts
├── nuxt.config.js
├── package.json
├── pages // 実際のページ
│   ├── README.md
│   ├── blog.vue
│   ├── index.vue
│   └── qiita.vue
├── plugins // 外部プラグイン
│   ├── README.md
│   ├── composition-api.js
│   ├── dayjs
│   │   ├── _day.js
│   │   ├── day.js
│   │   └── dayjs.d.ts
│   ├── font-awesome.js
│   ├── globalComponents.js // Bsseで始まるコンポーネントをglobalに登録
│   ├── intersection-observer.js
│   └── vuechart.js
├── routes.json
├── services // サーバー側でデータを取得してくる場合のAxiosのWrapper
│   ├── fetchQiitaData.ts
│   ├── fetchWeatherData.ts
│   └── http-client.ts
├── static
│   ├── README.md
│   ├── favicon.ico
│   ├── icon.png
│   └── sw.js
├── store
│   ├── README.md
│   ├── modules
│   │   └── qiita.ts
│   └── store.ts
├── tailwind.config.js // tailwindの設定ファイル
├── test
│   └── Logo.spec.js
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```