<template>
  <section class="container">
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
import { ref, computed, watch, onMounted } from '@vue/composition-api'
import { fetchWeatherData } from '@/services/fetchWeatherData'

export default Vue.extend({
  setup() {
    // State
    const money = ref(10)
    const delta = ref(1)

    // Computed props
    const formattedMoney = computed(() => money.value.toFixed(2))

    // Hooks
    onMounted(() => console.log('Clock Object mounted'))

    // Methods
    const add = () => (money.value += Number(delta.value))

    // Watchers
    const moneyWatch = watch(money, (newVal, oldVal) =>
      console.log('Money changed', newVal, oldVal)
    )

    return {
      delta,
      money,
      formattedMoney,
      add,
      moneyWatch
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

<style>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
