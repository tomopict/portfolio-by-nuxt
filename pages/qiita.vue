<template>
  <div>
    <QiitaLists />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import QiitaLists from '@/components/organisms/QiitaLists.vue'

@Component({
  components: {
    QiitaLists
  }
})
export default class Qiita extends Vue {}
</script>
