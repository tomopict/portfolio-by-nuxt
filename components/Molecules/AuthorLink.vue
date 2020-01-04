<template>
  <a :href="linkdata.link" target="_blank" class="block">
    <base-icon
      :icotype="'fab'"
      :name="linkdata.value"
      :size="'lg'"
      :style="{ color: 'white' }"
    />
  </a>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'AuthorLink',
  props: {
    linkdata: {
      type: Object,
      required: true
    }
  }
})
</script>
<style lang="scss" scoped></style>
