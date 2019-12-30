require('dotenv').config()
const environment = process.env.NODE_ENV
const envSet = require(`./env.${environment}.js`)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@plugins/globalComponents.js',
    '@/plugins/composition-api',
    '@/plugins/dayjs/day.js',
    { src: '@/plugins/font-awesome', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  extends: ['@nuxtjs/eslint-config-typescript'],
  devModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    transpile: ['vue-clamp', 'resize-detector']
  },
  dev: process.env.NODE_ENV !== 'production',
  env: {
    Qiita: process.env.QIITA_TOKEN,
    WEATHER: process.env.WEATHER_TOKEN,
    QiitaApi: envSet.qiitaApiBaseUrl
  }
}
