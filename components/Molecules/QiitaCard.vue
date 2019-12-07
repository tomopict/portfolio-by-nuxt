<template>
  <div class="sm:max-w-md rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <h3 class="font-bold text-xl mb-2">
        <a :href="post.url" target="_blank" rel="nofollow">
          <p class="qiitacard-ttl">{{ post.title }}</p>
        </a>
      </h3>
      <p class="text-gray-700 text-base">{{ postBody }}</p>
    </div>
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
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { PostLists } from 'models/QiitaPost'

@Component({})
export default class QiitaCard extends Vue {
  @Prop({ required: true })
  post!: PostLists

  get postBody() {
    const body = this.post.body
    const bodySlice = body.substr(0, 50)
    return bodySlice
  }
}
</script>
<style lang="scss" scoped>
.qiitacard {
  &-ttl {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>
