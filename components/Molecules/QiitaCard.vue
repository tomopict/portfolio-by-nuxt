<template>
  <div
    class="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white ml-2 qiitacard"
  >
    <a :href="post.url" target="_blank" rel="nofollow">
      <div class="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">
          <p class="qiitacard-ttl">{{ post.title }}</p>
        </h3>
        <p class="text-gray-700 text-base text-left">{{ state.postBody }}</p>
      </div>
    </a>
    <div class="px-6 py-4 flex flex-wrap">
      <BaseTag
        v-for="tag in post.tags"
        :key="tag.name"
        :tag="tag"
        :url="'https://qiita.com/tags/'"
        target="_blank"
        rel="nofollow"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, computed, reactive } from '@vue/composition-api'
import { PostLists } from '@/models/QiitaPost'

export default createComponent({
  name: 'QiitaCard',
  props: {
    post: {
      type: Object as () => PostLists,
      required: true
    }
  },
  setup({ post }) {
    const state = reactive({
      postBody: computed(() => post.body.substr(0, 50))
    })
    return { state }
  }
})
</script>
<style lang="scss" scoped>
.qiitacard {
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  &-ttl {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>
