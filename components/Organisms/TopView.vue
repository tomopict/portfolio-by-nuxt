<template>
  <div
    class="w-full flex h-screen flex-col justify-center items-center p-10 lg:w-1/3 text-white"
    :class="`timeslot-${timeSlot}`"
  >
    <img
      src="https://source.unsplash.com/random"
      alt=""
      class="w-40 h-40 rounded-full"
    />
    <h2 class="text-4xl">Welcome!</h2>
    <p class="text-lg">
      This is Portfolio Site<br />
      by tomopict
    </p>
    <Building />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed } from '@vue/composition-api'
import Building from '@/components/Molecules/Building.vue'
export default Vue.extend({
  name: 'TopView',
  components: {
    Building
  },
  setup(props, context) {
    const timeSlot = computed(() => {
      const time = +context.root.$dayjs().format('HH')
      switch (true) {
        case time < 5:
          return 'night'
        case time < 8:
          return 'earlymorning'
        case time < 12:
          return 'morning'
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
</style>
