<template>
  <div>
    <a
      :href="url + tag.name"
      v-bind="$attrs"
      :class="tagClass"
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-blue-500 hover:text-white mb-2"
    >
      {{ tag.name }}
    </a>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tag: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      default: '',
      required: false
    },
    tagClass: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
