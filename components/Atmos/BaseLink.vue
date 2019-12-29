<template>
  <div>
    <nuxt-link class="text-white" :to="link">
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    link: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: underline;
}
</style>
