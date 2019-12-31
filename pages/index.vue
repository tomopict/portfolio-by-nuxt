<template>
  <section class="bg-gray-200">
    <top-view />
    <section class="p-4 pt-10 mb-32">
      <h2 class="font-bold text-center mb-6 m-auto text-2xl">About</h2>
      <About :class="'lg:w-3/4'" />
    </section>
    <section class=" p-2 lg:w-3/4 m-auto">
      <h2 class="font-bold text-center mb-6 m-auto text-2xl">Qiita</h2>
      <qiita-lists :limit="3" />
      <BaseLink :link="'qiita'">Read More</BaseLink>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { reactive } from '@vue/composition-api'
import TopView from '@/components/Organisms/TopView.vue'
import About from '@/components/Organisms/About.vue'

import QiitaLists from '@/components/Organisms/QiitaLists.vue'

interface weatherParamModels {
  p: string
  APPID: string
}

export default Vue.extend({
  name: 'YourComponent',
  components: {
    TopView,
    QiitaLists,
    About
  },
  setup(props: {}) {
    const state = reactive({
      Props: props,
      message: ''
    })

    const changeMessage = (message: string) => {
      state.message = message
    }

    return {
      state,
      changeMessage
    }
  },
  async asyncData() {}
  // asyncData() {
  //   return axios
  //     .get(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060`)
  //     .then(res => {
  //       return { answer: res.data.status }
  //     })
  // return fetchWeatherData({
  //   q: 'tokyo',
  //   APPID: `${process.env.WEATHER}`
  // })
  //   .then(res => {
  //     return {
  //       weatherData: res.data
  //     }
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })
  // }
})
</script>

<style lang="scss" scoped>
.top {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: none;
}

h2 {
  border-bottom: 1px solid #4a5568;
  max-width: 200px;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
