<template>
  <div>
    <PostPreview />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PostPreview from '@/components/PostPreview.vue'

@Component({
  components: {
    PostPreview
  }
})
export default class Qiita extends Vue {}
</script>
