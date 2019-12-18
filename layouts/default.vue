<template>
  <div class="w-screen h-full lg:p-20" :class="`timeslot-${timeSlot}`">
    <nav-items />
    <nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { reactive, computed } from '@vue/composition-api'
import NavItems from '@/components/Organisms/NavItems.vue'

import { fetchWeatherData } from '@/services/fetchWeatherData'
import usePromise from '@/composables/use-promise.ts'

interface weatherParamModels {
  p: string
  APPID: string
}

export default Vue.extend({
  name: 'Default',
  components: {
    NavItems
  },
  setup(props: {}, context) {
    const timeSlot = computed(() => {
      const time = +context.root.$dayjs().format('HH')
      switch (true) {
        case time < 5:
          return 'night'
        case time < 8:
          return 'earlymorning'
        case time < 12:
          return 'morinig'
        case time < 17:
          return 'evening'
        case time < 19:
          return 'sunset'
        default:
          return 'night'
      }
    })

    return {
      timeSlot
    }
  },
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
.timeslot {
  &-earlymorning {
    background-color: #f9c5d1;
    background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
  }
  &-morning,
  &-evening {
    background-color: #7aa7f9;
    background-image: linear-gradient(315deg, #7aa7f9 0%, #577ff1 74%);
  }
  &-sunset {
    background-color: #a40606;
    background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
  }
  &-night {
    background-color: #2a305a;
    background-image: linear-gradient(316deg, #2a305a 0%, #141050 74%);
  }
}
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
