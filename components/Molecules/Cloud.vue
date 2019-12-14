<template>
  <div>
    <div id="cloud-circle"></div>
    <svg width="0" height="0">
      <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
        <feDisplacementMap in="SourceGraphic" scale="180" />
      </filter>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
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
</style>
