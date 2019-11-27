<template>
  <div>
    <client-only>
      <comments />

      <!-- サーバー側でレンダリングされた loading indicator -->
      <comment-placeholder slot="placeholder" />
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import comments from '@/components/Molecules/Comment.vue'
import CommentPlaceholder from '@/components/Molecules/CommentPlaceholder.vue'

@Component({
  components: {
    comments,
    CommentPlaceholder
  }
})
export default class Test extends Vue {}
</script>
