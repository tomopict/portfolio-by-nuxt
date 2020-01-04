<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script lang="ts">
import { SetupContext } from '@vue/composition-api'
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  setup(props, context: SetupContext) {
    const updateValue = event => {
      context.emit('change-message', event.target.value)
    }
    return {
      updateValue
    }
  }
}
</script>
