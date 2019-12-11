<template>
  <section class="container top" :class="`timeslot-${timeSlot}`">
    <div>
      <div id="cloud-circle"></div>
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
    </div>
    <BaseIcon />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { reactive, computed, onMounted } from '@vue/composition-api'
import { fetchWeatherData } from '@/services/fetchWeatherData'
export default Vue.extend({
  setup(props: {}, context) {
    // State
    const state = reactive({
      Props: props
    })
    const timeSlot = computed(() => {
      const time = +context.root.$dayjs().format('HH')
      switch (true) {
        case time < 5:
          return 'night'
        case time < 8:
          return 'earlymorinig'
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

    onMounted(() => {
      console.log('moutend')
    })

    return {
      state,
      timeSlot
    }
  },
  asyncData() {
    return fetchWeatherData({
      q: 'tokyo',
      APPID: `${process.env.WEATHER}`
    })
      .then(res => {
        return {
          weatherData: res.data
        }
      })
      .catch(e => {
        console.log(e)
      })
  }
})
</script>

<style lang="scss" scoped>
#cloud-circle {
  width: 500px;
  height: 275px;
  border-radius: 50%;
  filter: url(#filter);
  box-shadow: 400px 400px 60px 0px #fff;
  position: absolute;
  top: -320px;
  left: -320px;
}
.timeslot {
  &-earlymorinig {
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

.top {
  background-color: #cccccc;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: none;
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
