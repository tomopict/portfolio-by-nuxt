<template>
  <div>
    <ul class="flex flex-wrap -mb-4 px-4 bg-white">
      <li
        v-for="post in qiitaLists"
        :key="post.id"
        class="w-full sm:w-1/2 md:w-1/3 mb-6 "
      >
        <QiitaCard :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import QiitaCard from '@/components/Molecules/QiitaCard.vue'
import { qiitaModule } from '@/store/store'

@Component({
  components: {
    QiitaCard
  }
})
export default class QiitLists extends Vue {
  private mounted(): void {
    this.getQiitaListsFromStore()
  }

  get qiitaLists(): any {
    return qiitaModule.qiitaLists
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
