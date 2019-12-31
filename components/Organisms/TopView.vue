<template>
  <div
    class="w-full flex h-screen flex-col justify-center items-center p-10 text-white"
    :class="`timeslot-${timeSlot}`"
  >
    <img
      src="~/assets/img/avatar.png"
      alt=""
      class="topview-avatar w-20 h-20 rounded-full"
    />
    <h2 class="text-2xl">Welcome!</h2>
    <p class="text-lg topview-catch text-center">
      This is Portfolio Site<br />
      by tomopict
    </p>
    <div class="flex">
      <a href="https://twitter.com/tomopict" target="_blank" class="mr-2">
        <base-icon
          :icotype="'fab'"
          :name="'twitter'"
          :style="{ color: 'white' }"
        />
      </a>
      <a href="https://github.com/tomopict/" target="_blank">
        <base-icon
          :icotype="'fab'"
          :name="'github'"
          :style="{ color: 'white' }"
        />
      </a>
    </div>
    <div class="building-wrap pt-2" :class="`${timeSlot}`">
      <Building :building-class="`h-28 ${timeSlot}`" :window-num="8" />
      <Building :building-class="`h-20 w-mini ${timeSlot}`" />
      <Building :building-class="`h-30 behind ${timeSlot}`" />
      <Building :building-class="`h-22 ml-22 ${timeSlot}`" />
      <Building :building-class="`no-gap h-56 ml-2 ${timeSlot} ${timeSlot}`" />
      <Building :building-class="`h-30 behind ${timeSlot}`" />
      <Building :building-class="`h-22 ml-22 ${timeSlot}`" />
      <Building :building-class="`h-12 ml-10 ${timeSlot}`" />
      <Building :building-class="`h-22 ml-22 w-high ${timeSlot}`" />
      <Building
        :building-class="`h-64 ml-22 w-mini w-16 ${timeSlot}`"
        :building-height="20"
        :window-amount="5"
      />
      <Building
        :building-class="`h-20 ml-22 forward w-10 ${timeSlot}`"
        :building-height="5"
        :window-amount="3"
      />
      <Building :building-class="`h-40 ml-20 behind ${timeSlot}`" />
      <Building
        :building-class="`h-64 ml-3 behind ${timeSlot}`"
        :building-height="20"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed } from '@vue/composition-api'
import Building from '@/components/Molecules/Building.vue'
import Cloud from '@/components/Molecules/Cloud.vue'
export default Vue.extend({
  name: 'TopView',
  components: {
    Building,
    Cloud
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
          return 'sunset'
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
@import './assets/scss/_media-screen';
.topview- {
  &catch {
    font-weight: 100;
    line-height: 1.2;
  }
  &avatar {
    margin-top: -40px;
  }
}
.building-wrap {
  display: flex;
  align-items: flex-end;
  z-index: 1;
  position: absolute;
  bottom: 0;
  width: 100vw;
  overflow: hidden;
  @include sm {
    transform: scale(0.5);
    transform-origin: bottom;
    width: 200vw;
  }
  &.earlymorning,
  &.sunset {
    &:after {
      content: '';
      position: absolute;
      display: block;
      opacity: 0.2;
      z-index: 4;
      border-top: 10vw solid transparent;
      border-right: 100vw solid #000;
      border-bottom: 10vw solid #000;
      border-left: 100vw solid transparent;
    }
  }
}
.timeslot {
  &-earlymorning {
    background-color: #f9c5d1;
    background-image: linear-gradient(315deg, #ffdfe6 0%, #b8b7fa 74%);
  }
  &-morning,
  &-evening {
    background-color: #7aa7f9;
    background-image: linear-gradient(315deg, #7aa7f9 0%, #577ff1 74%);
  }
  &-sunset {
    background-color: #a40606;
    background-image: linear-gradient(315deg, #d98324 0%, #a40606 74%);
  }
  &-night {
    background-color: #2a305a;
    background-image: linear-gradient(316deg, #2a305a 0%, #141050 74%);
  }
}
</style>
