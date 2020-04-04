<template>
  <div class="building-wrap pt-2 " :class="`${timeslot}`">
    <Building :building-class="`h-28 ${timeslot}`" :window-num="8" />
    <Building :building-class="`h-20 w-mini ${timeslot}`" />
    <Building :building-class="`h-30 behind ${timeslot}`" />
    <Building :building-class="`h-22 ml-22 ${timeslot}`" />
    <Building :building-class="`no-gap h-56 ml-2 ${timeslot} ${timeslot}`" />
    <Building :building-class="`h-30 behind ${timeslot}`" />
    <Building :building-class="`h-22 ml-22 ${timeslot}`" />
    <Building :building-class="`h-12 ml-10 ${timeslot}`" />
    <Building :building-class="`h-22 ml-22 w-high ${timeslot}`" />
    <Building
      :building-class="`h-64 ml-22 w-mini w-16 ${timeslot}`"
      :building-height="20"
      :window-amount="5"
    />
    <Building
      :building-class="`h-20 ml-22 forward w-10 ${timeslot}`"
      :building-height="5"
      :window-amount="3"
    />
    <Building :building-class="`h-40 ml-20 behind ${timeslot}`" />
    <Building
      :building-class="`h-64 ml-3 behind ${timeslot}`"
      :building-height="20"
    />
  </div>
</template>
<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Building from '@/components/Molecules/Building.vue'

export default createComponent({
  name: 'Buildings',
  components: {
    Building
  },
  props: {
    timeslot: {
      type: String,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_media-screen';

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
</style>
