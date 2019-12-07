<template>
  <div>
    <ul class="flex flex-wrap -mb-4 px-4">
      <li
        v-for="post in posts"
        :key="post.id"
        class="w-full sm:w-1/2 md:w-1/3 mb-6 "
      >
        <QiitaList :post="post" />
      </li>
    </ul>
    <ul class="flex flex-wrap -mb-4 px-4">
      <li
        v-for="post in qiitaLists"
        :key="post.id"
        class="w-full sm:w-1/2 md:w-1/3 mb-6 "
      >
        <QiitaList :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { PostLists } from '@/models/QiitaPost'
import { fetchQiitaUserData } from '@/services/fetchQiitaData'

import QiitaList from '@/components/Molecules/QiitaList.vue'

import { qiitaModule } from '@/store/store'

@Component({
  components: {
    QiitaList
  }
})
export default class QiitLists extends Vue {
  posts: PostLists[] = []

  private mounted(): void {
    this.getQiitaListsFromPage()
    this.getQiitaListsFromStore()
  }

  get qiitaLists(): any {
    return qiitaModule.qiitaLists
  }

  private async getQiitaListsFromPage(): Promise<void> {
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

  private async getQiitaListsFromStore(): Promise<void> {
    try {
      await qiitaModule.getQiitaUserData({
        type: 'user',
        user: 'tomopict'
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
