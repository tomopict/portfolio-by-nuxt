<template>
  <div class="sm:max-w-md rounded overflow-hidden shadow-lg aaa">
    <div class="px-6 py-4">
      <h3 class="font-bold text-xl mb-2">
        <a :href="post.url" target="_blank" rel="nofollow">
          <v-clamp autoresize :max-lines="2">{{ post.title }}</v-clamp>
        </a>
      </h3>
      <p class="text-gray-700 text-base">{{ postBody }}</p>
    </div>
    <div class="px-6 py-4">
      <span
        v-for="tag in post.tags"
        :key="tag.name"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-blue-500 hover:text-white mb-2"
      >
        <a
          :href="'https://qiita.com/tags/' + tag.name"
          target="_blank"
          rel="nofollow"
        >
          {{ tag.name }}
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { PostLists } from 'models/Post'

import VClamp from 'vue-clamp'

@Component({
  components: {
    VClamp
  }
})
export default class QiitaList extends Vue {
  @Prop({ required: true })
  post!: PostLists

  get postBody() {
    const body = this.post.body
    const bodySlice = body.substr(0, 50)
    return bodySlice
  }

  public mounted(): void {
    console.log('aaa')
  }
}
</script>
<style lang="scss" scoped>
.aaa {
  height: 100%;
}
</style>
