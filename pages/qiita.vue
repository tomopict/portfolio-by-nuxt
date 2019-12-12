<template>
  <div>
    <!-- <BaseInput
      v-model="state.message"
      label="Description"
      type="text"
      placeholder="Description"
      class="field"
      @change-message="changeMessage"
    /> -->
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
