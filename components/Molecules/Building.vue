<template>
  <div :class="buildingClass" class="building">
    <p class="roof"></p>
    <div class="building-inner led">
      <ul v-for="n in buildingHeight" :key="n">
        <li v-for="nn in windowAmount" :key="nn" class="overtime"></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Building',
  props: {
    timeslot: {
      type: String
    },
    buildingClass: {
      type: String
    },
    buildingHeight: {
      type: Number,
      default: 10
    },
    windowAmount: {
      type: Number,
      default: 8
    }
  }
})
</script>

<style scoped lang="scss">
@import './assets/scss/_media-screen';
@mixin random-bgr() {
  background: rgba(255, 255, 100, (random(100) / 20));
}
@keyframes rooflight {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.building {
  z-index: 3;
  &.w-mini {
    li {
      height: 5px;
    }
  }
  &.perspective {
    transform-style: preserve-3d;
    perspective: 500px;
    .building-inner {
      transform: rotateY(-30deg);
    }
  }
  &.no-gap {
    ul {
      gap: 0;
      grid-template-columns: 100%;
      li {
        height: 3px;
        width: 100px;
        margin-bottom: 2px;
        &.overtime {
          &:before {
            display: none;
          }
        }
      }
    }
  }
  .roof {
    background: #33353c;
    width: 90%;
    height: 10px;
    margin: 0 auto;
    position: relative;
    &:before,
    &:after {
      animation: rooflight 3s infinite alternate;
      content: '';
      background: rgba(255, 0, 0, 0.6);
      border-radius: 10px;
      width: 10px;
      height: 10px;
      display: block;
      position: absolute;
      top: -5px;
    }
    &:before {
      left: -2px;
    }
    &:after {
      right: -2px;
    }
  }
  &.behind {
    transform: translate(-20px, 25px) scale(0.8);
    z-index: 2;
    .roof {
      background: #272729;
    }
    .building-inner {
      &:after {
        width: 100%;
        height: 100%;
        content: '';
        display: block;
        background: #000;
        position: absolute;
        top: 0;
        opacity: 0.4;
        left: 0;
      }
    }
  }
  &.forward {
    transform: translate(-10px, 0) scale(1.1);
    z-index: 3;
  }
  &-inner {
    bottom: 0;
    background: #33353c;
    padding: 10px 6px 6px 6px;
    overflow: hidden;
    position: relative;
    @include mq {
      width: 70px;
    }
    &.led {
      li {
        &.overtime {
          background: rgba(255, 249, 59, 0.9);
          box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.2);
          &:before {
            content: '';
            display: block;
            width: 3px;
            height: 3px;
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 0 3px 2px rgba(255, 255, 255, 0.7);
            position: absolute;
            top: 0;
            left: calc(50% - (3px / 2));
          }
        }
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 10px 10px 10px 10px 10px 10px 10px 10px;
    gap: 2px;
    & + ul {
      margin-top: 8px;
    }
    li {
      display: block;
      width: 10px;
      height: 7px;
      background: rgba(0, 0, 0, 0.9);
      position: relative;
      overflow: hidden;
    }
    &.empty li {
      background: transparent;
      box-shadow: none;
      &:before {
        display: none;
      }
    }
  }
}
</style>
