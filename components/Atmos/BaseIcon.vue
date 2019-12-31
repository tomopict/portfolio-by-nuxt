<template>
  <div class="icon-wrapper">
    <fa-icon :icon="[icotype, name]" :size="size" v-bind="$attrs" />
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'
export default createComponent({
  inheritAttrs: false,
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    icotype: {
      type: String,
      required: true
    },
    size: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped></style>
