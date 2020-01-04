<template>
  <div
    class="w-full flex h-screen flex-col justify-center items-center p-10 text-white topview"
    :class="`timeslot-${timeSlot}`"
  >
    <img
      src="~/assets/img/avatar.png"
      alt=""
      class="topview-avatar lg:w-40 lg:h-40 w-24 h-24 rounded-full"
    />
    <strong class="lg:text-4xl text-2xl topview-welcome target"
      >Welcome!</strong
    >
    <h1 class="lg:text-2xl text-2xl topview-catch text-center">
      This is Portfolio Site<br />
      by tomopict
    </h1>
    <ul class="flex mt-2 authorLinks">
      <li v-for="sns in snsLinks" :key="sns.value" class="authorLink">
        <author-link :linkdata="sns" />
      </li>
    </ul>
    <Buildings :timeslot="`${timeSlot}`" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { computed, reactive, toRefs } from '@vue/composition-api'
import AuthorLink from '@/components/Molecules/AuthorLink.vue'
import Buildings from '@/components/Organisms/Buildings.vue'
import { AUTHOR_SNS } from '~/constants/authordata'

class TimeSlot {
  constructor(timeslotObject: Number) {
    Object.assign(this, timeslotObject)
  }
  get timeslot() {
    return 'night'
  }
}
class TimeSlotNight extends TimeSlot {
  get timeslot() {
    return `night`
  }
}
class TimeSlotEarlyMorning extends TimeSlot {
  get timeslot() {
    return `earlymorning`
  }
}
class TimeSlotMorning extends TimeSlot {
  get timeslot() {
    return `morning`
  }
}
class TimeSlotEvening extends TimeSlot {
  get timeslot() {
    return `evening`
  }
}
class TimeSlotSunset extends TimeSlot {
  get timeslot() {
    return `sunset`
  }
}
function createTimeSlot(time: Number) {
  switch (true) {
    case time < 5:
      return new TimeSlotNight(time).timeslot
    case time < 8:
      return new TimeSlotEarlyMorning(time).timeslot
    case time < 12:
      return new TimeSlotMorning(time).timeslot
    case time < 17:
      return new TimeSlotEvening(time).timeslot
    case time < 19:
      return new TimeSlotSunset(time).timeslot
    default:
      return new TimeSlotNight(time).timeslot
  }
}

export default Vue.extend({
  name: 'TopView',
  components: {
    Buildings,
    AuthorLink
  },
  setup(props, context) {
    const state = reactive({
      snsLinks: AUTHOR_SNS
    })
    const timeSlot = computed(() => {
      const time = +context.root.$dayjs().format('HH')
      return createTimeSlot(time)
    })
    return {
      ...toRefs(state),
      timeSlot
    }
  }
})
</script>

<style lang="scss">
.timeslot-earlymorning {
  background: #f9c5d1;
  background-image: linear-gradient(315deg, #ffdfe6 0%, #b8b7fa 74%);
}
.timeslot-morning,
.timeslot-evening {
  background-color: #7aa7f9;
  background-image: linear-gradient(315deg, #7aa7f9 0%, #577ff1 74%);
}
.timeslot-sunset {
  background-color: #a40606;
  background-image: linear-gradient(315deg, #d98324 0%, #435ca9 74%);
}
.timeslot-night {
  background-color: #2a305a;
  background-image: linear-gradient(316deg, #2a305a 0%, #141050 74%);
}
.topview {
  &-catch {
    font-weight: 100;
    line-height: 1.2;
  }
  &-avatar {
    margin-top: -40px;
  }
}
.authorLink + .authorLink {
  margin-left: 10px;
}
</style>
