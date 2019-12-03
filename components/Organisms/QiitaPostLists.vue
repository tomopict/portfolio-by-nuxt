<template>
  <div>
    <ul class="flex flex-wrap -mb-4 px-4">
      <li
        v-for="post in posts"
        :key="post.id"
        class="w-full sm:w-1/2 md:w-1/3 mb-6 "
      >
        <QiitaLists :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { PostLists } from '@/models/QiitaPost'
import { fetchQiitaUserData } from '@/services/fetchQiitaData'

import QiitaLists from '@/components/Molecules/QiitaLists.vue'

@Component({
  components: {
    QiitaLists
  }
})
export default class QiitaPostLists extends Vue {
  posts: PostLists[] = []

  private mounted(): void {
    this.getQiitaLists()
  }
  async getQiitaLists(): Promise<void> {
    try {
      const res = await fetchQiitaUserData({
        headers: {
          Authorization: `Bearer ${process.env.Qiita}`
        }
      })

      this.posts = res.data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
