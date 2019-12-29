<template>
  <div class="w-screen lg:p-20 text-gray-700">
    <nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { reactive, computed, SetupContext } from '@vue/composition-api'

import { fetchWeatherData } from '@/services/fetchWeatherData'
import usePromise from '@/composables/use-promise.ts'

interface weatherParamModels {
  p: string
  APPID: string
}

export default Vue.extend({
  name: 'Default',
  asyncData() {
    const weatherParam = reactive({
      q: 'tokyo',
      APPID: `${process.env.WEATHER}`
    })
    const getEvents = usePromise(weatherParam => fetchWeatherData(weatherParam))
    getEvents.createPromise(weatherParam)
  }
})
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
