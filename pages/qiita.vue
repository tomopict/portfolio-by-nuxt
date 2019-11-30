<template>
  <div>
    <QiitaPostLists />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import QiitaPostLists from '@/components/organisms/QiitaPostLists.vue'

@Component({
  components: {
    QiitaPostLists
  }
})
export default class Qiita extends Vue {}
</script>
